/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} h
 * @param {string} needle
 * @return {number}
 */
var strStr = function(h, needle) {

    if(needle.length===0)return 0;

    if(h.length < needle.length)return -1;
    let flag=true;

    for(let i = 0 ; i <= h.length - needle.length ; i++){
        flag=true;
        for(let j = 0,k=i ; j < needle.length; j++,k++){
            if(h[k]!==needle[j]){
                flag=false;break;
            }
        }
        if(flag) return i;

    }
    return -1;
    
};
// @lc code=end

