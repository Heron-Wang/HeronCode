/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let len=s.length;
    if(s.length<=1)return false;

    let arr=[];
    arr.push(1);
    for(let i = 2 ; i * i <= len; i++){
        if(len%i===0){
            arr.push(i);
            arr.push(len/i);
        }
    }

    // if(arr.length===0)return false;

    let k=0;
    let m;

    for(let i = 0 ; i < arr.length; i++){
        let k=len/arr[i];
        let tem=s.substr(0,arr[i]);

     
        
        m="";
        while(k-- >0){
            m=m+tem;
        }
        if(m===s){
  
            
            return true;
        }
    }
    return false;


    
};
// @lc code=end

