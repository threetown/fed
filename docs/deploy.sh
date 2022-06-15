#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
echo 'hi.threetowns.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:zhangyunchencc/zhangyunchencc.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# 需要构建一下你的 SSH Public Key, see https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key
git push -f git@github.com:threetown/fed.git master:gh-pages

cd -