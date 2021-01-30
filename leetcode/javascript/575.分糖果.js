/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let set= new Set();
    for(let i = 0 ; i < candies.length; i++){
        set.add(candies[i]);

    }
    return Math.min(candies.length/2,set.size)
};
// @lc code=end

