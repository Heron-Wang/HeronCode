/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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

 
var getMinimumDifference = function(root) {
    let min=Infinity;
    //前序遍历
    let pre=-Infinity;
    dfs(root);

    function dfs(root){

        if(root.left!==null)dfs(root.left);
        min = min<(root.val-pre)? min:(root.val-pre);
        pre=root.val;
        if(root.right!==null)dfs(root.right);

    }
 
    return min;

    
};
// @lc code=end

