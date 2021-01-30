/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
    let res=[];
    let carry=0;
    let len1= num1.length,len2 =num2.length;
    for(let i = 0; i <len1;i++){
        let j = 0 ;
        for(;j < len2;j++ ){
            if(res[i+j] == undefined)res[i+j]=0;
            res[i+j] += num1[len1 - 1 -i] * num2[len2-1-j] +carry;
            carry = Math.floor(res[i+j] /10);
            res[i+j] %=10;
        }
        if(carry > 0){
            res[i+j] = carry;
        }
        carry =0;
    }
    let i = res.length-1;
    while(i >0 && res[i] == 0)i--;

    
    return res.slice(0,i+1).reverse().join("");


};
// @lc code=end

