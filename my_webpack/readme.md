手写webpack

01 webpack 如何工作  (npm init ------>  cnpm install webpack webpack-cli)
- 如何执行打包命令, 如npx webpack
- 打包完输出到dist目录, 通过html文件引入并在浏览器上运行
- npx 可以执行node_modules目录下的包
- npm init -y 自动生成一个package.json依赖包管理文件
- 分析打包生成的文件bundle.js, 明白它的结构, 以便自己生成一个这样的文件。
- 实现: 执行xx命令, 从webpack.config.js打包项目并生成bundle.js结构的文件。

- 分析bundle.js文件
bundle.js文件结构: (fun(modules){处理模块加载})(indexfile: fun, jdfile: fun)
将引用的文件路径补全, 如"./jd" 转换后是"./jd.js"
将require替换成webpack自定义加载函数__webpack_require__
参数: {模块相对路径: 代码内容}


02 创建打包命令jd-pack













