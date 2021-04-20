/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    //let map="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
   // console.log(map.length);
   if(s.length===0)return 0;
    let cnt=(s[0]===" "?0:1);
    for(let i = 0 ; i < s.length; i++){
        if( i+1 < s.length && s[i]===" " 
        && s[i+1] !== " "   ){
            cnt++;
        }
    }

    return cnt;

    
};
// @lc code=end

