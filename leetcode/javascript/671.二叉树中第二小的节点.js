/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    function myfun(root,val){
        if (root == null) {
            return -1;
        }
        if (root.val > val) {
            return root.val;
        }
        let l = myfun(root.left, val);
        let r = myfun(root.right, val);
        if (l > val && r > val) {
            return Math.min(l,r);
        }
        return Math.max(l,r);
    }

    return myfun(root,root.val);
    
};
// @lc code=end

