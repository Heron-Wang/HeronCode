/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    let diameter=0;
    dfs(root);
    return diameter;

    function dfs(root,level){ //返回以该节点为端点的最大边长
        if(root===null)return 0;
        const left=dfs(root.left); //左孩子节点为端点的最大边长
        const right= dfs(root.right); //右孩子节点为端点的最大边长
        
        //更新当前最大的边长，当前的最大边长和经过当前节点的最大边长。
        diameter =Math.max(diameter,left+right);

        return 1+ Math.max(left,right);
    }


    
};
// @lc code=end

