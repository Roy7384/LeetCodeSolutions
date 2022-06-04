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

var lowestCommonAncestor = function(root, p, q) {
    if (!root) return root;
    
    if (root.val === p.val || root.val === q.val){
        return root;
    }
    
    const leftResult = lowestCommonAncestor(root.left, p, q);
    const rightResult = lowestCommonAncestor(root.right, p, q);
    
    if (leftResult && rightResult) return root;
    
    if (leftResult) {
        return leftResult;
    } else {
        return rightResult;
    }
};
