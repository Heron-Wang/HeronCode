/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let flag=false;//是否开始遍历最后一个单词
    let cnt=0;// 记录最后一个单词的长度
    for(let i = s.length-1 ; i >=0; i--){
        if(flag===false ){
            if(s[i]!=" "){flag=true;cnt++;} 
            continue;

        }
        else if(s[i] !== " "){flag=true;cnt++;} 
        else return cnt;
    }
    return cnt;
    
};
// @lc code=end

