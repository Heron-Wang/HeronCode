/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum=0;
    for(let i = 0 ; i < nums.length; i++){
        sum+=nums[i];
    }
    let left=0;
    let right=sum;

    for(let i = 0 ; i < nums.length; i++){
        
        left += i===0?0:nums[i-1];
        right-= nums[i];
        if(right===left)return i;
    }
    return -1;  
};
// @lc code=end

