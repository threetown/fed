# swoole



## 一、安装

1. 安装swoole

```bash
pecl install swoole
```

2. 通过 `php -i | grep php.ini`定位`php.ini`文件所在位置，并打开该配置文件。在文件末尾追加如下内容：

```php
[swoole]
extension=swoole.so
```

保存并退出，在终端运行 `php -m`，如果看到扩展里包含 `swoole` 则说明安装启用成功。







## XAMPP

1. 进入 `XAMPP`的安装目录（`/Applications/XAMPP`）并用编辑器打开 `httpd.conf`（在`etc/`子目录） 

   ```bash
   code /Applications/XAMPP/etc/httpd.conf
   ```

2. 在文件中，找到下面代码并去掉开头的#符号

   ```diff
   - #Include etc/extra/httpd-vhosts.conf
   + Include etc/extra/httpd-vhosts.conf
   ```

3. 接着，打开 `httpd-vhosts.conf` 文件（在XAMPP安装目标下的`etc/extra/`子目录）

   ```bash
   code /Applications/XAMPP/etc/httpd-vhosts.conf
   ```

   接下来，就可以配置虚拟主机啦！

   ```basic
   <VirtualHost *:80>
          DocumentRoot "/Applications/XAMPP/xamppfiles/htdocs/"
          ServerName localhost
   </VirtualHost>
   <VirtualHost *:80>
          DocumentRoot "/Applications/XAMPP/xamppfiles/apps/wordpress/htdocs"
          ServerName wordpress.localhost
   </VirtualHost>
   ```

4. 配置hosts

   ```bash
   code /etc/hosts
   
   ## My Labs ##
   127.0.0.1        plc.localhost
   ```

5. 如遇访问拒绝，设置httpd.conf

   ```diff
   - <Directory />
   -     AllowOverride none
   -     Require all denied
   - </Directory>
   + <Directory />
   +     Options Indexes FollowSymLinks
   +     AllowOverride None
   +     Order allow,deny
   +     Allow from all
   + </Directory>
   ```







