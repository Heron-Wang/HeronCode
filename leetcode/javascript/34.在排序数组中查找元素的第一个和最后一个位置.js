/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(nums[mid]===target){
            left=mid;
            right=mid;
            while(nums[left]===target){
                left--;
            }
            while(nums[right]===target){
                right++;
            }
            return [left+1,right-1];
        }else if(nums[mid]<target){
            left=mid+1;

        } else{
            right=mid-1;
        }
    }

    return [-1,-1];
};
// @lc code=end

