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

    let currentNode = root;
    
    while (currentNode) {
        const valP = p.val;
        const valQ = q.val;
        const valCur = currentNode.val;
        
        if (valP > valCur && valQ > valCur) {
            currentNode = currentNode.right;
        } else if (valP < valCur && valQ < valCur) {
            currentNode = currentNode.left;
        } else {
            return currentNode;
        }
    } 
};