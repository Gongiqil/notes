#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd dist

git init
git add -A
git commit -m 'deploy'

# 打包发布到gh-pages分支
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Gongiqil/notes.git master:gh-pages

cd -
