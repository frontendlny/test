let path = require('path');

// 编译器
class Compiler {
  // config -- webpack.config.js
  constructor(config) {
    this.config = config;
    this.entry = config.entry;
    // 当前目录
    this.root = process.cwd();
  } 

  // 从root节点找所有的依赖模块
  // modulePath--模块文件路径  isEntry--是否是入口文件
  buildModule(modulePath, isEntry) {
    console.log(modulePath);
  }

  // 执行方法
  run() {
    this.buildModule(path.resolve(this.root, this.entry), true);
  }
}