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
    return exploreNode(root)[1];
};


const exploreNode = function(node) {
    if (!node) return [0, 0];
     
    const [maxDepthLeft, maxDiaLeft] = exploreNode(node.left);
    const [maxDepthRight, maxDiaRight] = exploreNode(node.right);
    
    const maxDepth = Math.max(maxDepthLeft, maxDepthRight) + 1;
    const maxChildDia = Math.max(maxDiaLeft, maxDiaRight);
    const maxDia = Math.max(maxChildDia, maxDepthLeft + maxDepthRight);
    
    return [maxDepth, maxDia];
}