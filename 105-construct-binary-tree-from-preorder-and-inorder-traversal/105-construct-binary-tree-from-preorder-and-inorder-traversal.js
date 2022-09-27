/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0 || inorder.length === 0) return null;

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);
    
    const split = inorder.indexOf(rootVal);
    
    const inorderLeft = inorder.slice(0, split);
    const inorderRight = inorder.slice(split + 1);
    
    const preorderLeft = preorder.slice(1, inorderLeft.length + 1);
    const preorderRight = preorder.slice(inorderLeft.length + 1);
    
    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);
    
    return root;
};