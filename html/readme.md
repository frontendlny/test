## 第1节 HTML基础  (超文本标记语言)
HTML5 
  一门技术   
  前端工程师

  网址(域) ）    
  空间(服) 器）

  网站建设 
  网站推广
  网站的运营

  【网站的开发流程】
  1. 市场调研
  2. 提出来需求（老板、产品经理、客户）（画出来一副原型图）
  3. 交给UI妹子设计 Photoshop
  4. 切图(html、css、JavaScript)
  5. 交给后台的汉子实现业务逻辑和功能
  6. 上线测试(测试环境)
  7. 给你们公司的测试(黑盒, 白盒, 灰盒)
  8. 上线(运营)

  【网站的组成部分】
  1. 结构层  html
  2. 表现层  css
  3. 行为层  javascript

  【标准】
    W3C
      html
      
      css
    
    ECMA
      JavaScript

  【标题标签】
  注意: h1 它是唯一的，有利于搜索引擎的优化和抓取。
  一般情况下h1包着logo的

## 第2节 CSS基础  (层叠样式表)
<link rel="stylesheet" type="text/css" href="你要引入的css文件"> 
rel: 建立关联性  与href属性
type: 定义某种类型  可以省略不写
href: 导入外部的css文件 (路径)

  【三者区别】
  1. 三者权重的对比: 
    行间样式表权重最高
    内部样式表和外部样式表权重一样 (书写顺序有关, 后面的会覆盖上面的)
  2. 三者作用域对比
    行间样式表的作用域最低, 权重最高

  【CSS选择器】
    css选择器分为四大类
    1. 标签选择器
    2. 类选择器 (class选择器)
    3. ID选择器
    4. 特殊选择器

    【伪类选择器】
      a:link 超链接默认的样式 
      a:visited 超链接访问过的样式
      a:hover 鼠标移入的样式
      a:active 鼠标点击的那一刻的样式

      注意: 1. 浏览器的缓存   2. 它们的顺序不能改变

      hover 和 active 可以适用于其他标签

      first-child  第一个孩子
      last-child 最后一个孩子
    
    【属性选择器】
      input[name="password"]{}

  【边框】
  solid 实线  double 双实线  dotted 点化线 dashed 虚线  none 去除边框

## 第3节 CSS高级 (浮动)
【盒子模型】
  【盒子模型组成】
  1. 外边距  margin
    设置margin的时候遇到的问题
    1). 在父元素里面的第一个子元素在设置margin-top的时候 会拖拽父级  解决: (1给父级加浮动)(2常用的方式给父级加padding-top)
    2). p标签在div里面同级并且上下排列的元素, 之间的margin的值不会累加 
  2. 边框  border
  3. 内边距  padding 
    padding不会对背景图造成影响
    padding主要控制子元素与父元素之间的位置
    padding添加在父元素上
  4. 内容 content

怪异的盒子模型
  需要box-sizing: border-box 触发
  特点: padding值和border值都会在宽高之内
  应用场景: 一般用于手机端(移动端)

【雪碧图】精灵图 sprite (属于网站优化的一部分)

## 第4节 CSS项目实战
【重置CSS样式】
@charset 'utf-8'; 设置字符编码格式 













