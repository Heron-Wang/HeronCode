/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(root===null)return null;
    if(val===root.val)return root;
    else if(val>root.val){
        return searchBST(root.right,val);
    }else {
        return searchBST(root.left,val);
    }
    

};
// @lc code=end

