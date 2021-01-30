/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let len=nums.length;
    if(len===1)return nums[0];
    if(len===2)return nums[0]>nums[1]?nums[0]:nums[1];

    let max1=nums[0], max2=-Infinity, max3=-Infinity;

    for(let i = 1 ; i < nums.length; i++){
        if(    nums[i] ===max1
            || nums[i] ===max2
            || nums[i] ===max3){
            continue;
        }

        if(nums[i]>max1){
            max3=max2;
            max2=max1;
            max1=nums[i];
        }
        else if(nums[i]>max2){
            max3=max2;
            max2=nums[i];
        }
        else if(nums[i]>max3){
            max3=nums[i];
        }
        
    }
    // console.log(max1);
    // console.log(max2);
    // console.log(max3);
    
    return max3===-Infinity?max1:max3;

    
};
// @lc code=end

