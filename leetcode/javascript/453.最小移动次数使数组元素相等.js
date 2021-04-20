/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    //n-1个加分  ，相当于剩下的一个减分

    if(nums.length<=1)return 0;

   // let max = Math.max.apply(Math,nums);
    let min = Math.min.apply(Math,nums);
    let len = nums.length;
    let res=0;

    for(let i = 0 ; i < len; i++){
        res += nums[i]-min;
    }

    return res;

    
};
// @lc code=end

