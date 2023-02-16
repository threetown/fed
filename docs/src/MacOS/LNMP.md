# LNMP

## Install PHP
* Choose the PHP version (this example uses 7.4)
```bash
brew install shivammathur/php/php@7.4
```

* Link the PHP Version

```bash
brew link --overwrite --force php@7.4
```

* Restart the Terminal

```bash
php -v
```


## composer

```bash
curl -sS https://getcomposer.org/installer | php

sudo mv composer.phar /usr/local/bin/composer
```

## TP6.0

* php 
```bash
$ php think make:command Hello hello

# 报错
 require(vendor/autoload.php): failed to open stream

```
What you're missing is running `composer install`, which will import your packages and create the vendor folder, along with the autoload script.


