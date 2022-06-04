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

const findNode = function (parentNode, targetNode) {
    if (!parentNode) return false;
    if (parentNode.val === targetNode.val) return true;
    return findNode(parentNode.right, targetNode) || findNode(parentNode.left, targetNode);
}

var lowestCommonAncestor = function(root, p, q) {
    let cur = root;
    
    while (cur) {
        if (findNode(cur.right, p) && findNode(cur.right, q)) {
            cur = cur.right;
        } else if (findNode(cur.left, p) && findNode(cur.left, q)) {
            cur = cur.left;
        } else {
            return cur;
        }
    }
};