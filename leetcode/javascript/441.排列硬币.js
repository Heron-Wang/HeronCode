/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n==0)return 0;
    // let m,k;
    // for(let k=1;k <=n;k++ ){
    //     m= 1+ 8 * n - (2 * k + 1) * ( 2*k + 1);
    //     if( m>=0 && m <= 8*k )return k;
    // }

    return Math.floor( 0.5 * Math.sqrt(8*n+1) -  0.5);
    
};
// @lc code=end

