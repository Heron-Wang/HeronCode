/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num==1)return false;
    let arr=[];// save its factor
    arr.push(1);
    for(let i = 2 ; i * i <= num; i++){
        if(num%i === 0 ){
            arr.push(i);
            if(i !==num/i ){
                arr.push(num/i);
            }
        }
    }
    let sum=0;
    for(let i = 0 ; i < arr.length; i++){
        sum+=arr[i];
    }

    return sum===num;




    
};
// @lc code=end

