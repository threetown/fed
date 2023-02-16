## Linux常用命令



| 场景             | 命令                      | 备注 |
| ---------------- | ------------------------- | ---- |
| 查看操作系统版本 | `cat /etc/redhat-release` |      |
|                  |                           |      |
|                  |                           |      |



## Linux安装应用

> First, use the DNF package management tools to update your local package index.
>
> ```bash
> sudo dnf update -y
> ```

### git

```bash
# install Git
$ sudo dnf install git -y

# confirm than you have installed Git
$ git --version
```









## Linux常见安装错误



### 1. Failed to download

* 问题复现

```bash
$ sudo dnf install git -y
Repository extras is listed more than once in the configuration
CentOS Linux 8 - AppStream                        111  B/s |  38  B     00:00    
Error: Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: No URLs in mirrorlist
```

* 问题分析

**`Centos 8` 于 2021年年底停止了服务**，大家再在使用yum源安装时候，出现下面错误：`Error: Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: No URLs in mirrorlist`

* 问题结论

最终原因还是源的问题，解决办法也是**解决源**的问题。

* 解决办法

  1. 进入 `yum` 的 `repos`目录：

     ```bash
     $ cd /etc/yum.repos.d/
     ```

  2. 修改所有的 `CentOS` 文件内容

     ```bash
     $ sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
     
     $ sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
     ```

  3. 更新 `yum` 源为阿里镜像

     ```bash
     $ wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
     
     $ yum clean all
     
     $ yum makecache
     ```

  4. `yum` 安装测试，是否可以 `yum`安装

     ```bash
     $ yum install wget –y
     ```















