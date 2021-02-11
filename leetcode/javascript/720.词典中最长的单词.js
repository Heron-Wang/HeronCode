/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort(); //排序+集合
    let set = new Set(); 
    let res = '';
  
    for (let word of words) {
      if (word.length === 1 || set.has(word.slice(0, -1))) {
        set.add(word);
        if (word.length > res.length) {
          res = word;
        }
      }
    }
    return res;
  };
// @lc code=end

