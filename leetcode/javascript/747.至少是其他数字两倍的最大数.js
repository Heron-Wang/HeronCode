/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max=-Infinity;
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i]>max)max=nums[i];
    }
   // console.log(max);
    let flag=-1;
    for(let i = 0 ; i < nums.length; i++){
     //   console.log(nums[i]+"       "+flag);
        if(nums[i]===max && flag===-1){
            flag=i;
            
        }else if( nums[i] * 2 <=max){
            continue;
        }else return -1;
    }

    return flag;
};
// @lc code=end

