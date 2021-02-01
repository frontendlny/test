// 1. 泛型及使用场景
// 2. 泛型在类中的运用
// 3. 枚举
// 4. 元组

function f<T>(x: T, y: T): T[] {
  return [x, y];
}
f<string | number>('a', 11);
f<number>(1, 23);
f(1, 2); // 类型推断


// 泛型具体的写法     
// 函数声明
function f1<T>(x: T): T {
  return x;
}
f1<number>(1);
// 函数表达式
var f2 = function <N>(x: N): N {
  return x;
}
f2<string>('1');
// 箭头函数
let f3 = <T>(x: T): T => x;
f3<number>(1);

// 泛型约束
// function f4<T>(x: T, y: T): T {
//   return x + y;
// }

interface Length {  //使用extends约束了泛型必须符合Length的形状
  length: number;
}
function f5<T extends Length>(arg: T): void {   //类型是必须有length属性的
  console.log(arg.length);  // 错误: T不存在length属性  比如数值等
  //return arg;
};
f5('124')
//类型必须有length属性


//泛型接口
//定义一个函数，判断传入的参数中第一个参数是否包含第二个参数('abc','a')
interface SearchFun {
  (a: string, b: string): boolean
}
//函数类型的类型检查    输入类型和输出类型
var fun2: SearchFun = function (src: string, str: string): boolean {
  var i = src.search(str);  //
  return i != -1;
};
fun2('abc', 'a');


interface SearchFun3 {
  <T>(a: T, b: T): boolean;
}
//函数类型的类型检查    输入类型和输出类型
var fun3: SearchFun3 = function <T>(src: T, str: T): boolean {
  return src == str;
};
fun3<string>('abc', 'a');

//也可以把泛型参数放在接口上
interface SearchFun4<T> {
  (a: T, b: T): boolean;
}
//函数类型的类型检查    输入类型和输出类型
var fun4: SearchFun4<string> = function <T>(src: T, str: T): boolean {
  return src == str;
};
fun4('abc', 'a')


//定义一个函数根据传入长度以及值来创建数组
//fun5(5,'a') ; ['a','a','a','a','a']
var arr: Array<number> = [1, 2, 3, 4];

interface createA2 {
  <T>(a: number, b: T): Array<T>
}

var c1: createA2;
c1 = function <T>(index: number, value: T): Array<T> {
  var a: T[] = [];
  for (let i = 0; i < index; i++) {
    a[i] = value;
  }
  return a;
};
c1<string>(2, 'abc');

// var c2: createA2;
// c2 = function <T>(i: number, v: T): Array<T> {
//   var a: T[] = [];
//   return a;
// };
// c1<number>(2, 222);

//泛型在类中的运用
class A2<T>{
  n: T;
  constructor(num: T) {
    this.n = num;
  }
  add(x: T): T {
    return x;
  }
}
var a2 = new A2<number>(1);
a2.add(3);

//多个类型参数
function multi<N, S>(sum: [N, S]): [S, N] {
  return [sum[1], sum[0]];
}
multi<number, string>([1, 'one']);

//扩展 
//泛型约束
interface Length3 {
  length: number;
}
interface createA3<N, T extends Length3> {
  (a: N, b: T): Array<T>
}

var c3: createA3<number, string>;
c3 = function <N, T>(i: N, v: T): Array<T> {
  var a: T[] = [];
  return a;
};
c3(2, '123');


//枚举enum类型是对JavaScript标准数据类型的一个补充
enum Color { Red, Green, Blue };
//let c = Color.Green;  // 1
var co1: Color = Color.Green; // 1
var co2: string = Color[0]; // Red
