/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre=nums[0];//以前一项结尾的最大子数组和
    let max= pre;

    for(let i = 1 ; i < nums.length; i++){
        pre = Math.max(pre + nums[i], nums[i] );
        max = pre>max?pre:max;
    }

    return max;
    
};
// @lc code=end

