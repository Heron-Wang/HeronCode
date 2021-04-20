/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.length===1)return true;
    let upper="QWERTYUIOPASDFGHJKLZXCVBNM";
    let c0,c1;
    c0=upper.indexOf(word[0]);  
    c1=upper.indexOf(word[1]);

    if(c0 ===-1 && c1 !== -1)return false;
    
    let flag= c1 !==-1 ;//是否是大写

    for(let i = 2 ; i < word.length; i++){
        if(flag){
            if(upper.indexOf(word[i])===-1)
            return false;
        }else if(upper.indexOf(word[i])!==-1){
            return false;
        }
        
    }

    return true;



    
};
// @lc code=end

