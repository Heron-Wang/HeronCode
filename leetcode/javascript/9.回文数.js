/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)return false;
    let y=x.toString();
    let i=0,j=y.length-1;
    for(;i<j;i++,j--){
        if(y[i]!==y[j])return false;
    }

    return true;

    
};
// @lc code=end

