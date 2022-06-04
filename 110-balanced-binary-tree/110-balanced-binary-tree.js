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
    
    const [lh, lbs] = checkNode(node.left);
    const [rh, rbs] = checkNode(node.right);
    
    const balanced = (lbs && rbs && Math.abs(lh - rh) <= 1);
    
    const maxHeight = Math.max(lh, rh);
    
    return [maxHeight + 1, balanced];
    
}

var isBalanced = function(root) {
    return checkNode(root)[1];
};