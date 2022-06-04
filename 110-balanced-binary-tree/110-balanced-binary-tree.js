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
 * @return {boolean}
 */

const checkNode = function (node) {
    if (!node) return [0, true];
    
    const leftResult = checkNode(node.left);
    const rightResult = checkNode(node.right);
    
    const balanced = (leftResult[1] && rightResult[1] && Math.abs(leftResult[0] - rightResult[0]) <= 1);
    
    const maxHeight = Math.max(leftResult[0], rightResult[0]);
    
    return [maxHeight + 1, balanced];
    
}

var isBalanced = function(root) {
    if (!root) return true;
    
    return checkNode(root)[1];
};