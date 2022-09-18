/**
 * Definition for a binary tree node.
 * function Treenode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Treenode} node
 * @return {boolean}
 */
var isValidBST = function(root) {
    return dfs(root, Infinity, -Infinity) 
}

const dfs = function(node, upper, lower) {
    if (!node) return true;
    
    if (node.val >= upper || node.val <= lower) return false;
    
    const rightResult = dfs(node.right, upper, node.val);
    const leftResult = dfs(node.left, node.val, lower);
    return rightResult && leftResult;
}