# 理解迭代
- 索引迭代 并不理想，原因如下
  - 迭代之前需要事先知道如何使用数据结构
  - 遍历顺序并不是数据结构固有的
  - 只适合于数组
# 迭代器模式
- 迭代器模式
    - 描述了一个方案，即可以把有些结构成为可迭代对象，因为他们实现了正式的Iteration接口，而且可以通过迭代器Iteration消费。
    - 可迭代对象是一种抽象的说法，基本上可以把可迭代对象理解成数组或者集合这样的集合类型的对象。他们的元素是有限的，都有无歧义的遍历顺序。

- 可迭代协议
    实现可迭代协议需要具备两个能力：支持 迭代的自我识别能力你，创建接口Iterator接口对象的能力。这意味着必须暴露一个属性作为默认迭代器，而这个属性必须使用Symbol.Iterator 作为键,对应的值是一个迭代器工厂函数


- 迭代器协议
    - 迭代器是一种一次性使用对象，用于迭代与其关联的可迭代对象。迭代器使用next()方法在可迭代对象中遍历数据。

# 生成器
- ES6新增的一个极为灵活的结构，拥有在代码块内暂停和恢复代码执行的能力。，比如使用生成器实现自定义迭代器和协程。
 