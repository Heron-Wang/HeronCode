# 什么是javascript

## javascript 历史回顾
- 1995年，javascript问世，主要用来代替服务端语言处理输入验证
- 1997年，javascript1.1提案提交后，TC39打造ECMA-262 
- 1998年，ISO和IEC将ECMAScript采纳为标准，各浏览器均以ECMAScript作为自己JavaScript实现的依据。

## javascript 是什么
- javascript是一门用来与网页交互的脚本语言，包括三个部分组成：
    - ECMAScript:由ECMA-262定义并提供核心功能
    - 文档对象模型（DOM）：提供与网页内容交互的方法和接口
    - 浏览器对象模型（BOM）：提供与浏览器交互的方法与接口

## javascript 与ecmascript区别
- ECMAScript即ECMA-262定义的语言，并不局限于web浏览器。ECMA-262将这门语言作为一个基准来定义，以便在它之上在构建更稳健的脚本语言。web浏览器只是ECMAScript实现可能存在的一种 **宿主环境**。宿主环境提供ECMAScript的基准实现和与环境自身交互必须的扩展。扩展使用ECMAScript核心类型和语法，提供特定于环境的功能。其他宿主环境还有node.js

- ECMA-262定义了如下内容：
    - 语法
    - 类型
    - 语句
    - 关键字
    - 保留字
    - 操作符
    - 全局变量

- ECMAScript只是对实现这个规范描述的所有方面的一门语言的称呼。JavaScript实现了ECMAScript，ActionScript同样实现了ECMAScript。

## DOM文档对象模型
- 是一个应用编程接口，用于html中使用扩展的XML，DOM将整个页面抽象为一组分层节点，html或xml页面的每个组成部分都是一个节点，包含不同的数据
```
html
 -head
    -title
        -sampage page
 -body
    -p
        -hello world
 ```

 - 使用dom API可以轻松的对文档节点进行增删改查

 - DOM级别
    - level 1: 1998年，两个模块：DOM core 和 DOM html，
    - level 2: 新增模块和接口：
        - DOM视图：描述追踪文档不同视图
        - DOM事件：描述事件及事件处理的接口
        - DOM样式：描述处理元素CSS样式的接口
        - DOM遍历和范围：描述遍历和操作DOM树的接口
    - level 3：进一步扩展了DOM：
        - 增加了以统一的方式加载和保存文档的方法
        - 验证文档的方法
        - 支持所有xml1.0的特性

    - level 4：W3C不再按照level维护dom，而是按照living Standard来维护，其快照为 DOM4，新增了代替mutation EVENTs的Mutation Observers
## BOM浏览器对象模型
- BOM主要针对浏览器窗口和子窗口，不过通常把任何特定于浏览器的扩展都归于BOM的范畴，比如这些扩展：
    - 弹出新浏览器窗口的能力
    - 移动缩放和关闭浏览器窗口的能力
    - navigator对象，提供浏览器的详尽信息
    - location对象，提供关于浏览器的详尽信息
    - screen对象，提供关于用户分辨率的详尽信息
    - performance对象，提供浏览器内存占用，导航行为和时间统计的相近信息
    - 对cookie的支持
    - 其他自定义对象，如XMLHTTPRequest和IE中的ActiveXObject

- 因为很长时间内没有标准，所以每个浏览器实现的都是自己的BOM，有一些所谓的事实标准。现在有了HTML5，BOM的实现细节会日趋一致。


