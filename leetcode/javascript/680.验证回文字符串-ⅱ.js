/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 *
 * https://leetcode-cn.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (34.31%)
 * Likes:    108
 * Dislikes: 0
 * Total Accepted:    10.8K
 * Total Submissions: 31.5K
 * Testcase Example:  '"aba"'
 *
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "aba"
 * 输出: True
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 * 
 * 
 * 注意:
 * 
 * 
 * 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let len =s.length;
    let left=0,right=len-1;
    while(left<right){
        if(s[left]==s[right]){
            left++,right--;
        }
        else {
            if(s[left] != s[right-1] && s[left+1] != s[right]){
                return false;
            } 
            else return isvalid(s.slice(left,right) ) || isvalid(s.slice(left+1,right+1));
        }
    }
    return true;

    function isvalid(s){
        for(let i =0 ,j =s.length-1;i<j;i++,j--){
            if(s[i]!=s[j])return false;
        }
        return true;
    }
};
// @lc code=end

