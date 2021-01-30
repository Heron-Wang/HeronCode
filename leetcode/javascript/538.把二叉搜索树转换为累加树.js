/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */

var convertBST = function(root) {
    
    let sum = 0 // 求和
    function trans(root) {//递归遍历
        if(root === null) return
        trans(root.right)//遍历右子树
        root.val+=sum  //将当前节点值加上右子树的和
        sum = root.val //更新和
        trans(root.left)//遍历左子树
    }
    trans(root)//调用递归
    return root//返回根节点
    
    
};
// @lc code=end

