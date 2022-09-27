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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    
    const result = [];
    dfsRight(root, 1, result);
    return result;
};


const dfsRight = function(node, depth, result) {
    if (depth > result.length) result.push(node.val);
    
    if (node.right) dfsRight(node.right, depth + 1, result);
    if (node.left) dfsRight(node.left, depth + 1, result);
}