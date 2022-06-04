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
    if (!lbs) return [0, false];
 
    const [rh, rbs] = checkNode(node.right);
    if (!rbs) return [0, false];
    
    
    const balanced = Math.abs(lh - rh) <= 1;
    
    const maxHeight = Math.max(lh, rh);
    
    return [maxHeight + 1, balanced];
    
}

const isBalanced = function(root) {
    return checkNode(root)[1];
};