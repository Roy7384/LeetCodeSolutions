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
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;
    
    let maxDiameter = exploreMax(root.left) + exploreMax(root.right);
    
    let maxDiaInChild = Math.max(diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right));
     
    return Math.max(maxDiameter, maxDiaInChild);
};


const exploreMax = function(node) {
    if (!node) return 0;
     
    let maxDepth = Math.max(exploreMax(node.left), exploreMax(node.right));
    
    return maxDepth + 1;
}