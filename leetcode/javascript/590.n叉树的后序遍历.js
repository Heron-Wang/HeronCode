/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
function Node(val, children = []) { //"Every node is an Object of this function"
    this.val = val;
    this.children = children;
};

var postorder = function(root, order = []) { //"Initiate an empty order array"
    if (!root) return []; 
    if (root.children.length === 0) return [root.val]; //"This is our basecase and how we break out of the recursive loop. If there are no children then we hit the end of the tree and we return an array, because typically it should match the element we are trying to return in the first place"

   for (let i = 0; i < root.children.length; i++) { //"Traverse the children...if there are any"
        const child = root.children[i];
        order = order.concat(postorder(child)) //"Our recursive call. Since our recursive call returns an array we need to concatenate it with our current order array."
   }
   order.push(root.val) //"We push the root's value in last to make sure the children's values get pushed in first."

   return order;
};
// @lc code=end

