/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = function(root, p, q) {
    if (!root) return false;
    if (root.val === p.val || root.val === q.val) return root;
    
    const leftResult = lowestCommonAncestor(root.left, p, q);
    const rightResult = lowestCommonAncestor(root.right, p, q);
    
    if (leftResult && rightResult) return root;
    
    return leftResult || rightResult;
};
