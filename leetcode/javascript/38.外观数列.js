/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
/* 
var countAndSay = function(n) {
    var str = '1';
    for (var i=1; i < n; i++) {
        var strArray = str.split('');
        str ='';
        var count = 1;
        // Loop through current nth level line
        for (var j=0; j < strArray.length; j++) {
            // Next digit is different
            if (strArray[j] !== strArray[j+1]) {
                // Go to next non-matching digit
                str += count + strArray[j];
                count = 1;
            }
            else {
                count++;
            }
        }
    }
    return str;
}; */
var countAndSay = function(n) {
    let str='1';
    for(let i = 1 ; i < n; i++){
        let arr=str.split("");
        str='';
        let count=1;
        let j;
        for( j = 1 ; j < arr.length; j++){
            if(arr[j] === arr[j-1])count++;
            else{
                str += count + arr[j-1];
                count=1;
            }
        }
        str += count + arr[j-1];
        
    }
    return str;


};



// @lc code=end

