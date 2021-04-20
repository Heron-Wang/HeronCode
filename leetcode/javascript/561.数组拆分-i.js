/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums
    .sort((a, b) => a - b)
    .filter((x, index) => index % 2 === 0)
    .reduce((a, b) => a + b);
    
};
// @lc code=end

