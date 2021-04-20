/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map1={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    let map2={
        "IV":4,
        "IX":9,
        "XL":40,
        "XC":90,
        "CD":400,
        "CM":900
    };
    let res=0;
    for(let i=0;i<s.length;i++){
        if(i+1<s.length && map2[s[i]+s[i+1]]!==undefined ){
            res += map2[s[i]+s[i+1]];
            i++;
        }
        else res += map1[s[i]];

    }

    return res;



    
};
// @lc code=end

