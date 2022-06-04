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
    const valP = p.val;
    const valQ = q.val;
    const valRoot = root.val;

    if(valP > valRoot && valQ > valRoot) {
       return lowestCommonAncestor(root.right, p, q);
    } else if (valP < root.val && valQ < root.val) {
       return lowestCommonAncestor(root.left, p, q);
    } else {
        return root
    }
};