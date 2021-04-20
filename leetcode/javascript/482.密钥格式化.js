/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    let newS = S.split("-").join("").toUpperCase().split("");
    let len = newS.length;
    let les = len % K;
    console.log(newS);
    
    for(let i = len - 1 ; i >=0 ; i--){
        if(les === (i+1)%K  && i+1<len){
            newS.splice(i+1,0,'-');
        }
    }

    return newS.join("");
    

    
};
// @lc code=end

