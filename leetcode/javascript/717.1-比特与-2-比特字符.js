/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = 0 
    for(; i < bits.length-1; i++){
        if(bits[i]===1)i++;
    }
    return i===bits.length-1;
    
};
// @lc code=end

