/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let map="abcdefghijklmnopqrstuvwxyz";
    let min=letters[0];
    let mindif=(map.indexOf(min)-map.indexOf(target)+25)%26 + 1;
    for(let i = 1 ; i < letters.length; i++){
        let dif=(map.indexOf(letters[i])-map.indexOf(target)+25)%26+1;
        if(dif < mindif){
            mindif=dif;
            min=letters[i];
        }
    }
    return min;
    
};
// @lc code=end

