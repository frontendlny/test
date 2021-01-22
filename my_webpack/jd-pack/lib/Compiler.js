let fs = require('fs');
let path = require('path');
// 编译器
class Compiler {
  // config -- webpack.config.js
  constructor(config) {
    this.config = config;
    this.entryId; // 存入口文件路径
    this.entry = config.entry;
    // 当前目录
    this.root = process.cwd();
    // 用来保存所有模块依赖
    this.modules = {};
  }
  // 读取模块内容
  getSource(modulePath) {
    return fs.readFileSync(modulePath, 'utf8');
  }
  // 模块文件解析  source-文件内容, parentPath--文件目录
  // 解析结果: 是否存在子依赖包dependcies, 解析的源码sourceCode
  parse(soure, parentPath) {

  }
  // 从root节点找所有的依赖模块
  // modulePath--模块文件路径  isEntry--是否是入口文件
  buildModule(modulePath, isEntry) {
    // console.log(modulePath);
    let source = this.getSource(modulePath);
    let moduleName = './' + path.relative(this.root, modulePath);
    console.log(moduleName);  // src\index
    if (isEntry) {
      this.entryId = moduleName; // 存入口文件路径
    }
    // 解析结果: 是否存在子依赖包dependcies, 解析的源码sourceCode
    let { sourceCode, dependencies } = this.parse(source, path.dirname(moduleName));
    // 保存解析的代码
    this.modules[moduleName] = sourceCode;
    // 递归
    dependencies.forEach(dep => {
      this.buildModule(path.join(this.root, dep), true);
    })
  }

  // 执行 
  run() {
    this.buildModule(path.resolve(this.root, this.entry), true);
  }
}
module.exports = Compiler