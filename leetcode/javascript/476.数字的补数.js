/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return num ^ parseInt(num.toString(2).replace(/\d/g, '1'), 2);
    let i=1;
    while(i< num+1){
        i *= 2;
    }
    return i-num-1;
    
};
// @lc code=end

