/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let f=[];
    f[0]=f[1]=1;
    function fb(n){
        if(n===0 || n==1 ) return 1;
        if(f[n-1]!==undefined){
            f[n]=n*f[n-1]
            return f[n]; 
        }
        return n*fb(n-1);  

    }

    let twos=0;                       // 2 的个数
    let res=0;               
    for( ; twos *2 <= n; twos++){
        let ones = n - 2 * twos;      // 1 的个数
        let cnt= fb(ones+twos)/(fb(ones)*fb(twos));
        
        res+=cnt;
    }
    return res;

};
// @lc code=end

