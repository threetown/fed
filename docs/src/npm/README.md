# Npm

> **n**ode **p**ackage **m**anager

* [npm-link说明书](https://fynn90.github.io/2019/12/01/npm_link%E8%AF%B4%E6%98%8E%E4%B9%A6/)
* [搭建NPM私有仓库](https://fynn90.github.io/2018/11/21/npm%E7%A7%81%E6%9C%89%E4%BB%93%E5%BA%93/)



## Linux安装npm

* [下载node](https://nodejs.org/en/download/)安装包（以**Linux Binaries (x64)** 为例）

  ```bash
  wget https://nodejs.org/dist/v14.17.5/node-v14.17.5-linux-x64.tar.xz
  ```

* 解压node

  ```bash
  tar -xvf node-v14.17.5-linux-x64.tar.xz
  ```

* 移动到指定目录

  ```bash
  mv node-v14.17.5-linux-x64 /usr/local/node
  ```

* 建立软连接

  ```bash
  cd /usr/local/node
  ln -s bin/node node
  ln -s bin/npm npm
  ln -s bin/npx npx
  ```

  

## Node版本升级和降级

>安装`npm`插件`n` ,通过n模块来管理`node`版本

 1、全局安装`n`模块

```bash
npm install -g n
```

2、安装当前稳定版本

```bash
n stable

# 或

sudo n stable
```

3、安装最新版本的

```bash
n latest

# 或

sudo n latest
```

4、安装指定版本的`node`

```bash
n v8.16.0
```

5、卸载指定的`node`版本

```bash
n rm v8.16.0
```

