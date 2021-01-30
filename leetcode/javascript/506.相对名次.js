/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
        // create ranks array in descending order
        //降序排序，并存到新数组中
    let ranks = nums.slice(0).sort((a, b) => b - a);
    
    // map places in ranks if no medal
    return nums.map((num, i) => {
       if (num === ranks[0]) return 'Gold Medal';
       else if (num === ranks[1]) return 'Silver Medal';
       else if (num === ranks[2]) return 'Bronze Medal';
       else return (ranks.indexOf(num) + 1).toString();
    });
    
    
    
};
// @lc code=end

