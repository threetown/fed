# MNMP

> MNMP，指的是：**M**ac + **N**ginx + **M**ySQL + **P**HP。
>
> 在Mac系统中，我们推荐使用：brew 安装！如安装过程中遇到问题，请参考 [brew](./brew.md)



## 一、Nginx

### 1.1 安装 nginx

```bash
# 查询 nginx
brew search nginx

# 安装 nginx
brew install nginx

# 安装过程中，会出现如下信息：
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/nginx-1.21.1.catalina.bottle.tar.gz
######################################################################## 100.0%
==> Pouring nginx-1.21.1.catalina.bottle.tar.gz
==> Caveats
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To have launchd start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  nginx
==> Summary
🍺  /usr/local/Cellar/nginx/1.21.1: 25 files, 2.2MB
```



### 1.2 管理nginx

> 通过的上面安装信息，可以获取以下信息：
>
> * 默认端口号：`8080`
>
>   `The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
>   nginx can run without sudo.`
>
> * 加载所有nginx配置：
>
>   `/usr/local/etc/nginx/servers/`
>
> * 启动nginx
>
>   `brew services start nginx`
>
> * 后台服务启动nginx
>
>   `nginx`



## 二、Mysql

> Mac地址通过 `brew` 安装

### 2.1 查询MySql版本

```bash
# 查询
brew search mysql

# 安装指定版本
brew install mysql@5.7

# 安装成功后提示
We've installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
    mysql -uroot

mysql@5.7 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have mysql@5.7 first in your PATH, run:
  echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc

For compilers to find mysql@5.7 you may need to set:
  export LDFLAGS="-L/usr/local/opt/mysql@5.7/lib"
  export CPPFLAGS="-I/usr/local/opt/mysql@5.7/include"


To have launchd start mysql@5.7 now and restart at login:
  brew services start mysql@5.7
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/mysql@5.7/bin/mysql.server start
```



### 2.2 命令

> ```bash
> mysql.server  {start|stop|restart|reload|force-reload|status}
> ```

* 启动MySQL服务：`mysql.server start`
* 设置密码：`mysql_secure_installation`
* 连接MySQL：`mysql -uroot`



## 三、PHP

> MacOS自带了 Apache 和 PHP
>
> * 查看PHP版本：`php -v 或 php -verseion`

### 3.1 安装 PHP

```bash
# 查询php
brew search php

# 安装指定版本php
brew install php@7.4

# 安装成功，提示信息
To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php7_module /usr/local/opt/php@7.4/lib/httpd/modules/libphp7.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

The php.ini and php-fpm.ini file can be found in:
    /usr/local/etc/php/7.4/

php@7.4 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have php@7.4 first in your PATH, run:
  echo 'export PATH="/usr/local/opt/php@7.4/bin:$PATH"' >> ~/.zshrc
  echo 'export PATH="/usr/local/opt/php@7.4/sbin:$PATH"' >> ~/.zshrc

For compilers to find php@7.4 you may need to set:
  export LDFLAGS="-L/usr/local/opt/php@7.4/lib"
  export CPPFLAGS="-I/usr/local/opt/php@7.4/include"


To start php@7.4:
  brew services start php@7.4
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/php@7.4/sbin/php-fpm --nodaemonize
==> git
The Tcl/Tk GUIs (e.g. gitk, git-gui) are now in the `git-gui` formula.

zsh completions and functions have been installed to:
  /usr/local/share/zsh/site-functions

Emacs Lisp files have been installed to:
  /usr/local/share/emacs/site-lisp/git
```



### 3.2 管理PHP

* 启动：`brew services start php@7.4`



## 四、Apache

启动、关闭、重启Apache命令如下：

* 开启： `sudo apachectl start`
* 停止： `sudo apachectl stop`
* 重启： `sudo apachectl restart`
* 查看Apache版本：`httpd -v 或 sudo apachectl -v`
* 查找Apache执行文件：`which apachectl`