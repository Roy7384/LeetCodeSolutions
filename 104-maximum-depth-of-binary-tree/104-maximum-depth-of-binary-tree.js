/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
   if (!root) return 0;
   
   const lD = maxDepth(root.left);
   const rD = maxDepth(root.right);
    
   const maxD = Math.max(lD, rD);
   return maxD + 1;
};


