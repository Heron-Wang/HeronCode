# HeronCode
---
这是关于我的cs编程学习笔记仓库。理论+实战，动手敲一遍等于看十遍书。



## todos

- leetcode刷题记录，在接下来的时间里按照标签刷leetcode并作相应的总结。

- 《javascrip高级编程-第四版》书籍看一遍+代码敲一遍。


## 相关问题

### vscode-leetcode插件配置
由于我需要用到多种语言刷题，而leetcode的默认配置使用是将所有的语言格式都存放在同一个文件夹中，一次这里需要 配置下leetcode插件的配置文件，修改两个参数即可
```
{
    "leetcode.workspaceFolder": "E:\\GitHub\\HeronCode\\leetcode",
    "leetcode.filePath": {
        "cpp": {
            "folder": "cpp",
            "filename": "${id}.${kebab-case-name}.${ext}"
        },
        "python3": {
            "folder": "python3",
            "filename": "${id}.${kebab-case-name}.${ext}"
        },

        "javascript": {
            "folder": "javascript",
            "filename": "${id}.${kebab-case-name}.${ext}"
        }
    }

}
```
上面就表示我将不同语言的题目放置在不同的文件夹中。
配置好之后就开始愉快的刷题吧！
