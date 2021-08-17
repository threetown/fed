# brew

> brew镜像

## 一、brew镜像

* 中科大镜像：`https://mirrors.ustc.edu.cn`
* 清华大学镜像：`https://mirrors.tuna.tsinghua.edu.cn`

### 1. 替换 brew

```bash
# 进入brew仓库目录
cd "$(brew --repo)"

# 查看brew远程仓库信息
git remote -v

# 修改brew远程仓库地址
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git
```

### 2. 更新brew源

```bash
brew update
```



## 二、brew常用命令

```bash
brew search mysql
brew search mysql
brew services run|start|stop|restart (formulal|--all)
```

