/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let dp=[];
    function dfs(root,i){
        if(root===null) return ;
        if(dp[i]===undefined){
          dp[i]=[];  
        }
        dp[i].push(root.val);
        dfs(root.left,i+1);
        dfs(root.right,i+1);
    }

    dfs(root,0);
    let res=[];

    for(let i = 0 ; i < dp.length; i++){
        res[i]=0;
        for(let j = 0 ; j < dp[i].length; j++){
            res[i] += dp[i][j];
        }
        res[i] /= dp[i].length;
    }
    return res;
    
    
};
// @lc code=end

