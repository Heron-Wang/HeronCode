/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry=0;
    let res=[];
    let tem=0;
    let len1=num1.length;
    let len2=num2.length;
    let i=0;
    for(; i <= len1 || i <= len2; i ++){
        if(i<len1 && i<len2){
            tem = carry + +num1[len1-1-i] + +num2[len2-1-i];
        } 
        else if( i >= len1 && i < len2){
            tem = carry +  +num2[len2-1-i];
        }
        else if( i < len1 && i >= len2){
            tem = carry + +num1[len1-1-i] ;
        }
        else if( carry ===1){
            tem=carry;
        }
        else break;

        carry= (tem >= 10 ? 1:0);
        res[i] = tem % 10;
    }



    return res.reverse().join("");
    
};
// @lc code=end

