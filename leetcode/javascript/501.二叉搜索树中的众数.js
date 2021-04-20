/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
/* var findMode = function(root) {
    const counts = new Map();
    const max = walk(root, counts);
    const result = [];
    
    for (let [value, count] of counts) {
      if (count === max) {
        result.push(value);
      }
    }
    
    return result;
  };
  
  const walk = (root, counts) => {
    if (!root) {
      return 0;
    }
    
    const count = counts.has(root.val) ? counts.get(root.val) + 1 : 1;
    counts.set(root.val, count);
    
    return Math.max(
      count,
      walk(root.left, counts),
      walk(root.right, counts)
    );
  } */

var findMode = function(root) {
    let res=[];
    let value=[];//存储值
    let freq=[];//存储值对应的频次
    let maxf=0;//记录最大的频次；
    dfs(root);

    function dfs(root){
        if(root ===null)return;
        let j = value.indexOf(root.val);
        if( j === -1){//不存在
            j=value.length;
            value.push(root.val);
            freq.push(1);     
        }else {
            freq[j]++;
        }

        maxf = maxf>freq[j]?maxf:freq[j];
        if(root.left!==null)dfs(root.left);
        if(root.right!==null)dfs(root.right);
    }
    for(let i = 0 ; i < value.length; i++){
        if(freq[i] ===maxf)res.push(value[i]);
    }

    return res;


}
// @lc code=end

