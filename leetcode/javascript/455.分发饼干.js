/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>(a-b));
    s.sort((a,b)=>(a-b));
    let gi=0,si=0;
    let cnt=0;
    while(gi<g.length && si < s.length){
        // console.log(g[gi],s[si]);
        if(g[gi] <= s[si]){
            cnt++;
            gi++;
            si++;
        }
        else{
            si++;
        }
        // console.log(cnt);
    }
    return cnt;

    


    
};
// @lc code=end

