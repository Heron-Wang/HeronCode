/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} f
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(f, n) {
    let cnt=0;
    if(f.length===1 &&f[0]===0)return ++cnt >= n;
    for(let i = 0 ; i < f.length; i++){//遍历i处是否能种下花
        if(i-1<0 ){
            if( f[i]===0 && f[i+1]===0){
                 cnt++ ;
                 f[i]=1;
            }
          
        }
        else if(i+1===f.length){
            if(f[i]===0 && f[i-1]===0) {
               cnt++ ;
               f[i]=1;
            }
            
        }
        else if(f[i]===0 && f[i-1]===0  &&f[i+1]===0){
            cnt++;
            f[i]=1;
        }
    }
    if(cnt>=n)return true;
    else return false;
    
};
// @lc code=end

