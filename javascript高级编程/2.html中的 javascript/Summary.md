## 使用<script>元素
- script有如下8个属性：
    - async:表示应该立即下载脚本，但是不能阻止其他页面动作，比如下载资源或者等待其他脚本的加载，只对外部脚本有效
    - charset：使用src属性指定的代码字符集，（大多数浏览器不在乎他的值）
    - crossorigin：配置相关请求的cors(跨域资源共享)设置，默认不使用cors。
        - ="anonymous"配置文件请求不必设置凭据标志
        - ="use-credentials"设置凭据标志意味着出站请求会包含凭证。
    - defer:表示脚本可以延迟到文档完全被解析和显示之后在执行。只对外部脚本有效
    - integrity：允许比对接到的资源和指定的加密签名以验证子资源完整性。这个可以确保CDN不会提供恶意内容。
    - language：废弃，最初用于表示代码块中的脚本语言，大部分代码会忽略他的值
    - src：表示要包含代码的外部文件
    - type:代替language，表示代码块中脚本语言的内容类型（也称mine类型）
        - 按照惯例，这个值始终是"text/javascript"
        - 如果这个值是"module"，则代码会被当成es6模块，而且只有这时候代码中才能出现import和export关键字

- 在使用行内代码时，代码中不能出现"</script>",想避免这个问题可以使用转义"\</script>"替换

- 标签的位置：
    - 过去所有的script标签都放在head标签内，这种做法的主要目的是把外部的css和js脚本集中放在一起，，不过把所有的script脚本放在head里面也就意味着必须把所有的javascript把代码都下载，解析，解释完成后，才能开始渲染页面，对于需要很多的js的页面，，这会导致页面渲染延迟，在此期间浏览器窗口完全空白，
    - 现代web应用程序通常将所有javascript引用放在<body>元素中的页面内容后面，这样页面在处理javascript代码之前完全渲染页面，空白页显示时间更短，用户就会感觉页面加载更快了。

- 推迟执行脚本 defer
    - 设置defer，告诉浏览器立即下载，但延迟执行，会在浏览器解析完</html> 标签后只执行。
    - html5规范要求脚本应该按照他们出现的顺序执行，因此第一个推迟的脚本会在第二个推迟的脚本之前执行，
    - 都会在DOMContentLoaded事件之前执行。

## 行内脚本和外部脚本的比较
- 外部脚本便于管理以及降低消耗（尤其在第二次请求时，由于浏览器已经缓存了这些脚本文件，所以加载变快。）
    - spdy
    - http2
## 文档模式对JavaScript有什么影响
- 文档模式，即可以通过doctype切换文档模式，文档模式有三种：
    - 混杂模式，省略开头的doctype声明
    - 标准模式 ，使用doctype声明，其中包括 html5文档模式
    - 准标准模式，通过过渡性文档类型Transitional和框架集文档类型 Frameset 来触发

## 确保JavaScript不可用时的用户体验
- 使用noscript标签