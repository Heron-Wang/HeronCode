/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    for(let i = 0 ; i < s.legnth; i ++ ){

        for(let j = 0 ,k = s.length; j < k ; j++,k--){
            if(j===i)j++;
            if(k===i)k--;
            if(s[i]!==s[j])break;
            
        }
        
        if(j>=k)return true;
        
    }
    return false;
    
};
// @lc code=end

