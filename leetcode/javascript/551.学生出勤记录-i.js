/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a=0,l=0;
    for(let i = 0 ; i < s.length; i++){
        if(s[i]==='A'){
           a++; 
           l=0;
        }
        else if(s[i]==='L'){
           l++; 
           if(l>2)return false;
        }
        else l=0;

        if(a>1)return false;
    }
    return true;

    
};
// @lc code=end

