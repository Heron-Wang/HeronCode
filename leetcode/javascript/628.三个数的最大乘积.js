/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    //找三个数  相当于找一个最大的正数 和两个同符号号的数
    nums.sort((a,b)=>(a-b));
    let len=nums.length;
    if(nums[len-1]<=0  ||nums[0]>=0){//全正  或者 全负
        return nums[len-1]*nums[len-2]*nums[len-3];
    }
    //有正有负 ：相当于找一个最大的正数 和两个同符号的乘积的最大数
    let max=0;
    for(let i = 0 ; i < nums.length-2; i++){
        if(nums[i]*nums[i+1]>max){
            max=nums[i]*nums[i+1];
        }
    }

    return max*nums[len-1];


};
// @lc code=end

