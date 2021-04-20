function f(){}

// `object instanceof constructor`
// instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
console.log(f instanceof Function ) //true
console.log(Function instanceof Function) //true
console.log(Function instanceof Object) //true
console.log(Object instanceof Function) //true

console.log(f instanceof f) //false
console.log(f instanceof f) //false

