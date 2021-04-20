/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for(let i = nums.length-1 ; i >=0 ; i--){
        let j=nums.slice(0,i).indexOf(target - nums[i]);
        if(j!=-1){
            return [j,i];
        }
    }
    
    
};
// @lc code=end

