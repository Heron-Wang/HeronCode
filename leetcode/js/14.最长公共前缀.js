/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0)return "";
    if(strs[0].length===0)return "";

    for(let i=0;i<strs[0].length;i++){
        for(let j=1;j<strs.length;j++){
            if(strs[j][i] != strs[0][i])
            return strs[0].substr(0,i);
        }
    }
    return strs[0];


    
};
// @lc code=end

