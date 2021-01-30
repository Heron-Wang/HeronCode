/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr=s.split(" ");
    for(let i = 0 ; i < arr.length; i++){
        let tem=arr[i].split("");
        for(let j = 0,k = tem.length-1 ; j <k; j++,k--){
            let c=tem[j];
            tem[j]=tem[k];
            tem[k]=c;
        }

        arr[i]=tem.join("");
    }
    return arr.join(" ");
    
};
// @lc code=end

