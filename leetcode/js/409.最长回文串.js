/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    //就是求在字符串中出现两次的字符个数 +1 即可
    //字符串是可以通过下标只读的，不能通过下表修改字符
    let arr=s.split("");
    let cnt=0;
    for(let i = 1 ; i < arr.length; i++){
        j=arr.slice(0,i).indexOf(s[i]);
        if(j!==-1){
            cnt++;
            arr[i]='#';
            arr[j]='#';
        }
    }
    console.log(arr);
    if(s.length===cnt*2)return cnt * 2;
    else return cnt*2 + 1;
    
};
// @lc code=end

