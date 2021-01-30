/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let a=x.toString(2).split("");
    let b=y.toString(2).split("");
    let res=0;
    // console.log(a);
    // console.log(b);
    
    
    for(let i =a .length-1, j=b.length-1 ; i >= 0 || j>=0  ; i--,j--){
        if(a[i]==undefined)a[i]=0;
        if(b[j]==undefined)b[j]=0;
        if(+a[i] + +b[j] === 1) res++;
    }
    return res;
};
// @lc code=end

