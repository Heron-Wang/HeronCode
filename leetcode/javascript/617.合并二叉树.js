/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    

    function merge(t1,t2){
        if(t1===null&& t2===null) return null;
        else if(t1===null){
            return t2;
        }
        else if(t2==null){return t1}
        else {//
            t1.val +=t2.val;
            if(t1.left!==null && t2.left!==null){
                t1.left=merge(t1.left,t2.left);
            }
            else if(t2.left!==null){
                t1.left=t2.left;
            }

            if(t1.right!==null && t2.right!==null){
                t1.right=merge(t1.right,t2.right);
            }
            else if(t2.right!==null){
                t1.right=t2.right;
            }

            return t1;
        }

    }

    return merge(t1,t2);
    
    
    
};
// @lc code=end

