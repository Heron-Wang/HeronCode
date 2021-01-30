/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {

    if(ops.length == 0)return m*n;

    let a=ops[0][0],b=ops[0][1];
    for(let i = 1 ; i < ops.length; i++){
        if(a > ops[i][0])a=ops[i][0];
        if(b > ops[i][1])b=ops[i][1];
    }

    return a*b;
    
};
// @lc code=end

