# 理解对象
- javascript中的对象成为引用值，几种内置的引用类型可用于创建特定类型的对象。引用值与类相似但是实现不同。


# 基本javascript数据类型
- Date 类型
    - 继承的方法，toLocalString(),toString(),valueOf()
    - 格式化方法
        - toDateString(),
        - toTimeString(), 
        - toLocalDateString(), 
        - toLocalTimeString(), 
        - toUTCString()
    - 组件方法,（more）

- RegExp类型 
    - let expression = /pattern/flags
    - 实例属性
        - global 是否设置了g标记
        - ignoreCase 是否设置了i标记
        - unicode 是否设置了u标记
        - sticky
        - lastIndex 表示在源字符串中下一次搜索的开始位置
        - multiline
        - dotAll
        - source 正则表达式字面量字符串，没有开头和结束的斜杠
        - flags 正则表达式的标记字符串， 没有前后斜杠
    - 实例方法
    - 构造函数
    - 模式局限

- 原始值包装类型
    - Boolean
    - Number
    - String


- 单例内置对象
    - Global，浏览器实现了对Global的代理对象
    - Math

# 原始值与原始值包装类型
