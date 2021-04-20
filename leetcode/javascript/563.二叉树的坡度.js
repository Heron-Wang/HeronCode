/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function(root) {
    let res=0;
    dfs(root);
    return res;

    function dfs(root){//返回该节点子树的和
        if(root===null)return 0;
        let leftsum=dfs(root.left);
        let rightsum=dfs(root.right);
        res += Math.abs(leftsum-rightsum);
        return root.val + leftsum + rightsum;
    }

    

};
// @lc code=end

