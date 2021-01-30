/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let max_int=Math.pow(2,31)-1;
    let min_int= -Math.pow(2,31);

    if(x>max_int || x<min_int)return 0;

    let y= +Math.abs(x).toString().split("").reverse().join("") * (x>0?1:-1);

    if(y>max_int || y<min_int)return 0;

    return y;



    
    
};
// @lc code=end

