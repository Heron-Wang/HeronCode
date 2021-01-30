/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max=0,cnt=0;
    let flag=false;//标记前一项是否为1
    nums.forEach(function(v){
        if(flag){
            flag = (v===1);
            cnt= flag?(cnt+1):0;

        }else{
            flag = (v===1);
            cnt= flag?1:0;
        }

        max = max>cnt?max:cnt;

    })

    return max;

    
};
// @lc code=end

