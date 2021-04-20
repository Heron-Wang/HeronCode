/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */

var preorder = function(root) {
    let num=[];
    dfs(root);
    function dfs(root){
        if(root === null) return;
        num.push(root.val);
        let p=root.children;
        for(let i = 0 ; i < p.length; i++){
            dfs(p[i]);
        } 
        return;
    }
  
    
    return num;
    
};
// @lc code=end

