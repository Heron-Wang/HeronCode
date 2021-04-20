/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    // method - check both directions at once, move pointer if numbers are counting in the wrong direction
    let l = nums.length-1, r = 0;
    let min = nums[l], max = nums[r];

    for(let i = 0; i < nums.length; i++) {
        let j = nums.length-1-i;

        if(nums[i] < max) { r = i }
        if(nums[j] > min) { l = j }

        max = nums[i] > max ? nums[i] : max;
        min = nums[j] < min ? nums[j] : min;
    }
	// r-l=0 for single number list, r-l=-1 for already sorted list
    return r-l < 1 ? 0 : r-l+1;
};
// @lc code=end

