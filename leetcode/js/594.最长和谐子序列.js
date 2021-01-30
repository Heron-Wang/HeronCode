/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let m = new Map()
    for (let i of nums) {   //遍历 nums 中的属性
        if (m.has(i))       //判断 m 是否有属性i
            m.set(i, m.get(i) + 1)
        else
            m.set(i, 1)
    }
    // ...扩展运算符，将数组转化为数组中的各个元素输出
    let ent = [...m.entries()], max = 0
    ent.sort((a, b) => a[0] - b[0])
   
    for (let i = 0; i < ent.length - 1; i++) {
        if (ent[i][0] + 1 == ent[i + 1][0])
            max = Math.max(max, ent[i][1] + ent[i + 1][1])
    }
    return max
};
// @lc code=end

