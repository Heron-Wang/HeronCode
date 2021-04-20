/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.10%)
 * Likes:    1269
 * Dislikes: 0
 * Total Accepted:    171.5K
 * Total Submissions: 426.1K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length===0)return true;
    if(s.length%2 === 1)return false;


    let left=["(","[","{"];
    let right=[")","]","}"];

    let  stack = [];
    for(let i=0;i<s.length;i++){
        if(left.indexOf(s[i]) !== -1) {
            stack.push(s[i]);
        }
        else if(right.indexOf(s[i])!==-1){//右括号
            if(s[i] !== stack[stack.length-1]){
                return false;
            }
            stack.pop();

        }

        else return false;//不是括号字符

    }

    if(stack.length===0)return true;
    else return false;

    
};
// @lc code=end

