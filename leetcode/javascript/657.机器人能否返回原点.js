/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let l=0,u=0;
    moves.split("").forEach(v => {
        if(v==='R')l--;
        if(v==='L')l++;
        if(v==='U')u++;
        if(v==='D')u--;
    });

    if(l==0 && u==0)return true;
    return false;
    
};
// @lc code=end

