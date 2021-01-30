/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let len=s.length;
    let mod=len % (2*k);
    let arr=s.split("");
    let i=0;
    for(i = 0 ; i  < len-mod; i +=  2 * k){
       
        for(let m = i,j=i+k-1; m < j; m++,j--){
            let tem=arr[m];
            arr[m]=arr[j];
            arr[j]=tem;       
        }
    }
    if(mod>=k){
        for(let m = i,j=i+k-1; m < j; m++,j--){
            let tem=arr[m];
            arr[m]=arr[j];
            arr[j]=tem;       
        }
    }
    else{
        for(let m = i,j= i+  mod-1; m < j; m++,j--){
            let tem=arr[m];
            arr[m]=arr[j];
            arr[j]=tem;       
        }

    }

    return arr.join("");
    
};
// @lc code=end

