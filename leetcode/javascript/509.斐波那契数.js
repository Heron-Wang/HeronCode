/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N===0)return 0;
    if(N===1)return 1;
    let n1=1,n2=0;
    let res;
    for(let i=2;i<=N;i++){
        res =n1+n2;
        n2=n1;
        n1=res;
    }
    return res;
    
};
// @lc code=end

