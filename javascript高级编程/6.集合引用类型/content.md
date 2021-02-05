# 对象
- [{}和new Object(),Object.create()三者区别](https://blog.csdn.net/sinat_27514587/article/details/102964631)

# 数组和定型数组
- Array数组
    -  ES6新增两个方法from(),of()
        - Array.from(obj),将一个类数组结构(有属性length)转化成数组结构，
        - Array.of() 可以把一组参数转化为数组

    - 检测数组
        - value instanceof Array 检测value是否为数组。但是如果value是跨全局上下文传过来的值，这种方法是无法进行判断的。
        - Array.isArray() 可以解决上面的问题。
    - ES6新增三个迭代方法 keys(),values(),entries()
    
    - ES6新增两个批量复制方法copyWithin(), fill()

    - 转换方法 toString(),toLocalString(),valueOf()

    - 栈方法，push(),pop()
    - 队列方法,shift(),unshift()
    - 排序方法 sort(),reverse()
    - 操作方法 concat(),slice(),split()
    - 搜索方法 indexOf(),lastIndexOf(),includes()
        - 断言函数 find((item,index,array)=>{函数体}) 返回符合条件的值
            findIndex((item,index,array)=>{函数体}) 返回符合条件的索引
    - 迭代方法
        - every()
        - filter()
        - forEach()
        - map()
        - some()

    - 归并方法 reduce(), reduceRight()
        - reduce((pre,cur,index,array)=>(相关操作))

- 定型数组
    - ArrayBuffer 基本单位
    - DataView 用于操作
    - 定型数组

# Map, WeakMap, Set, WeakSet
- Map 类型，映射主要完成键值对的映射，其中键可以是对象
    - 基本API ：
        - get()
        - has()
        - delete()
        - clear()
        - size
        - set()

    - 与Object比较：
        - Map内存占用更少
        - Map插入性能更好
        - Object查找速度更好
        - Map删除性能更好

- Set 类型，集合，
    - 基本API：
        - has()
        - size
        - add()
        - delete()

- WeakMap和WeakSet 主要描述垃圾回收对待这种类型中的值的方式。
    - weakMap中的键必须是对象
    - WeakSet中存储的值必须是对象。