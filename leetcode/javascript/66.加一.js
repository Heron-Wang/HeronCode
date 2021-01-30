/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len=digits.length;
  let i=len-1;
  while(digits[i]==9){
      digits[i]=0;
      i--;
  }

  if(i<0)digits.unshift(1);
  else digits[i]++;
    return digits;


};
// @lc code=end

