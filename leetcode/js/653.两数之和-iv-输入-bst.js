/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k , map = {}) {


    if (!root) return false
    if (k - root.val in map) return true
    map[root.val] = 1
    return findTarget(root.left, k, map) || findTarget(root.right, k, map)
};
// @lc code=end

