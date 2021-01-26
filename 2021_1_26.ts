// 1. class类
// 2. 类的继承
// 3. 修饰符
// 4. 类和接口的异同


// 构造函数
function Cat(name, color) {
  this.name = name;
  this.color = color;
};
Cat.prototype.type = '动物';
Cat.prototype.eat = function () {
  console.log('吃');
};
let c1 = new Cat('tom', 'blue');

// 类的定义
class Cat2 {
  name: string;
  color: string;
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  eat() {
    console.log('吃');
  }
}
let c2 = new Cat2('tom', 'blue');


// class A{}  == class A { constructor(){} }

// 类的继承
class Animal { // 动物类
  type: string;
  constructor(type) {
    this.type = type;
  }
  eat() {
    return '吃';
  }
  say() {
    return '叫';
  }
}
class Dog extends Animal {  // Dog类继承动物类
  name: string;
  age: number;
  constructor(type, name, age) {
    super(type); // super关键字  表示父类的构造函数
    this.name = name;
    this.age = age;
  }
  action() {
    console.log('....');
  }
}


// 修饰符
// static 静态方法  不需要实例化
class Obj {
  static str: string = 'abc';
  // constructor(str) {
  //   this.str = str;
  // }
  static action() {
    console.log('...');
  }
}
Obj.action();
Obj.str;

class Obj3 {
  private name;
  public constructor(name) {
    this.name = name;
  }
  protected action() {
    return this.name;
  }
}
let obj3 = new Obj3('tom');

class Dog2 extends Obj3 {
  a: string;
  b: string;
  c: string;
  constructor(name, a, b, c) {
    super(name);
    this.a = a;
    this.b = b;
    this.c = c;
  }
  say() {
    return this.action();
  }
}

// 有时候不同类之间有一些共同的特性, 这时候就可以把特性提取成接口(interfaces)
// 用implements关键字来实现。 这个特性大大提高了面向对象的灵活性。
interface Alarm { // 报警器
  sing(): void; // 抽象的空方法  是一个规范
}
interface Light {  // 灯
  lightOn(): boolean;
  lightOff(): boolean;
}
// 一个类实现多个接口
class Dar implements Alarm, Light {
  sing() {
    console.log('...')
  }
  lightOn() {
    return true;
  }
  lightOff() {
    return false;
  }
} 