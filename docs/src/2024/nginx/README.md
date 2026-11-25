## nginx

> * 正向代理
> * 反向代理
> * SSL证书
> * 缓存
> * eventStream
> * vue的history

### 一、配置nginx配置

```nginx
# 配置虚拟主机的相关参数
server
{
  # 设置监听端口
  listen 80;
	listen 443 ssl http2;
  # 设置虚拟主机的域名
  server_name mini.bjjfr.com;
  # 设置网站的默认访问页面
	index index.html index.htm index.php default.php default.htm default.html;
  # 设置网站的根目录
  root /www/wwwroot/mini.bjjfr.com;
    
  #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
  #error_page 404/404.html;
  #HTTP_TO_HTTPS_START
  if ($server_port !~ 443){
    rewrite ^(/.*)$ https://$host$1 permanent;
  }
  #HTTP_TO_HTTPS_END
  ssl_certificate    /www/server/panel/vhost/cert/mini.bjjfr.com/fullchain.pem;
  ssl_certificate_key    /www/server/panel/vhost/cert/mini.bjjfr.com/privkey.pem;
  ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
  ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
  ssl_prefer_server_ciphers on;
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 10m;
  add_header Strict-Transport-Security "max-age=31536000";
  error_page 497  https://$host$request_uri;


  #SSL-END
    
  #ERROR-PAGE-START  错误页配置，可以注释、删除或修改
  #error_page 404 /404.html;
  #error_page 502 /502.html;
  #ERROR-PAGE-END
  
  #PHP-INFO-START  PHP引用配置，可以注释或修改
  include enable-php-56.conf;
  #PHP-INFO-END
  
  #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
  include /www/server/panel/vhost/rewrite/mini.bjjfr.com.conf;
  #REWRITE-END
  
  ###############################
  # 定义URL匹配规则及对应的处理逻辑  #
  ###############################
  #禁止访问的文件或目录
  location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
  {
    return 404;
  }
  
  #一键申请SSL证书验证目录相关设置
  location ~ \.well-known{
    allow all;
  }
  
  location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
  {
    expires      30d;
    error_log /dev/null;
    access_log off;
  }
  
  location ~ .*\.(js|css)?$
  {
    expires      12h;
    error_log /dev/null;
    access_log off; 
  }
  access_log  /www/wwwlogs/mini.bjjfr.com.log;
  error_log  /www/wwwlogs/mini.bjjfr.com.error.log;
}

```



### 二、SSL

```nginx
add_header Strict-Transport-Security "max-age=31536000";

# 一键申请SSL证书验证目录相关设置
location ~ \.well-known{
  allow all;
}
```



### 三、浏览器缓存

浏览器的缓存类型有3种，分别是：强缓存、协商缓存、无缓存。通过配置http头（`add_header`）的`Cache-Control`来实现。【强缓存，还可能通过配置`Expires`来实现】

```nginx
add_header Cache-Control no-cache;

if ($request_filename ~* \.(css|js|png|jpg|jpeg|gif|gz|svg|ico|mp4|ogg|ogv|webm|otf|woff|woff2|ttf|eot)$) {
  add_header Cache-Control "public, max-age=604800"; # 缓存 7 天
  expires off; # 只使用 max-age 做强制缓存即可。
  add_header ETag "";
  add_header Last-Modified "";
}
```

* `Cache-Control`字段枚举：

  ```nginx
  Cache-control: must-revalidate
  Cache-control: no-cache
  Cache-control: no-store
  Cache-control: no-transform
  Cache-control: public
  Cache-control: private
  Cache-control: proxy-revalidate
  Cache-Control: max-age=<seconds>
  Cache-control: s-maxage=<seconds>
  ```



### 四、EventStream

服务端返回的`Content-Type`为`text/event-stream`

```nginx
# 设置http版本为1.1（默认为：1.0）
proxy_http_version 1.1;

# 关闭nginx缓存
proxy_buffering off;
proxy_cache off;

# 设置Upgrade和Connection请求头
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';

# 设置适当的超时时长
proxy_connect_timeout   15;  # 与upstream server的连接超时时间（没有单位，最大不可以超过75s）
proxy_send_timeout      300; # 发送请求给upstream服务器的超时时间
proxy_read_timeout      300; # nginx会等待多长时间来获得请求的响应
```





### vue-router中history模式

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

* `try_files`：用于按顺序检查文件或目录是否存在，并根据其存在与否来决定如何处理请求。
* `$uri`：代表了当前请求的URI（统一资源标识符），但不包括任何查询字符串（即URL中`?`后面的部分）。



