/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (60.24%)
 * Likes:    100
 * Dislikes: 0
 * Total Accepted:    18.6K
 * Total Submissions: 30.9K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入：
 * s = "abcd"
 * t = "abcde"
 * 
 * 输出：
 * e
 * 
 * 解释：
 * 'e' 是那个被添加的字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map="abcdefghijklmnopqrstuvwxyz";
    let s_sum=0,t_sum=0;
    for(let i = 0 ; i < s.length; i++){
        s_sum += map.indexOf(s[i]);
        t_sum += map.indexOf(t[i]);
    }
    t_sum += map.indexOf(t[t.length-1]);

    return map[t_sum-s_sum]
    
};
// @lc code=end

