版本管理工具
1. 分布式版本控制
2. 多个开发人员协调工作
3. 有效监听谁做的修改
4. 本地及远程操作

基础命令行操作
1. git init            // 初始化本地git仓库
2. git add <file>      // 添加文件
3. git status          // 查看状态
4. git commit          // 提交
5. git push            // 推送到仓库
6. git pull      // 从远程仓库拉取数据
7. git clone     // 从远程仓库拷贝数据


git --version
touch index.html
touch app.js
git init

git config --global user.name 'frontendlny'
git config --global user.email 'myfrontend@qq.com'

git add git.md
git status
git *html
git status
git commit -m 'changed app.js'


1. 如何使用git忽略不想上传的文件
2. 分支的使用
3. 主线及分支的合并
4. 操作远程仓库

git remote
git remote add origin https://github.com/frontendlny/test.git

git push -u origin master