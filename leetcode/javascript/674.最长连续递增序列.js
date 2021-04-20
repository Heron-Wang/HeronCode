/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length==0)return 0; 
    let res=1,cnt=1;;

    for(let i = 1 ; i < nums.length; i++){
        if(nums[i]>nums[i-1])cnt++;
        else cnt=1;
        if(cnt>res)res=cnt;
    }
    return res;
    
};
// @lc code=end

