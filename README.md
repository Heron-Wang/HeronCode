# HeronCode
---
这是关于我的cs编程学习笔记仓库。实战，多看多想，多验证。



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

### 修改本地的git账户
这几天踩了一个大坑。因为想要更换邮箱，于是为了修改本地的git账户的邮箱，发现还真不容易呀！这里做下总结。
1. 配置ssh
 - 重新生成本地的ssh密钥和公钥：
> ssh-keygen -t rsa -f ~/.ssh/id_rsa -C "heronwang@qq.com"

 - 删除github中原先的旧公钥，将生成公钥重新添加到github设置中

 - 本地连接github仓库,并在本地保存连接记录
 > ssh -t git@github.com

 > git clone使用
 git clone git@github.com:user/repo

2. 配置git账户
 配置完上一步后，还没完，还需要配置git账户,通过这个可以使用https进行克隆和提交仓库。
> git config --global --unset user.name
> git config --global --unset user.email
> git config --global --unset credential.helper  # 这一步很重要 取消本地的凭据管理，然后在本地删除相应的凭据即可

> git config --global user.name="heronwang@qq.com"
> git config --global user.email="Heron"



禁用笔记本自带键盘
> sc config i8042prt start= disabled


打开笔记本自带键盘
>sc config i8042prt start= auto


 远程修改
 
 
