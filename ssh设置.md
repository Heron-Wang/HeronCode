--- 
最近更换了邮箱，然后发现什么一切都需要重新再来一遍了
--- 


安装好git

设置 git 的全局邮箱和姓名
>  git config --global user.email "you@example.com"
>  git config --global user.name "Your Name"


# 设置ssh
1. 重新生成本地的ssh密钥和公钥：
> ssh-keygen -t rsa -f ~/.ssh/id_rsa -C "heronwang@qq.com"

2. 将公钥添加到github仓库中

3. 本地连接github仓库,并在本地保存连接记录
> ssh -t git@github.com

4. git clone使用
> git clone git@github.com:user/repo