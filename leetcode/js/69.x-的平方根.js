/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let res=0;
    for(let i=0;i*i<=x;i++){
        res=i;
    }        
    
    return res;  
};
// @lc code=end

