/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let nstr='';
    for(let i = 0 ; i < str.length; i++){
        if(str[i].charCodeAt() >= "A".charCodeAt() && str[i].charCodeAt() <= "Z".charCodeAt()){
            nstr += String.fromCharCode( str[i].charCodeAt() + 26 + 6)
        }
        else nstr+=str[i]
        
    }
    return nstr;

    
};
// @lc code=end

