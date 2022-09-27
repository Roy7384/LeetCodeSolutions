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
    
    root.left = buildTree(preorder.slice(1, split + 1), inorder.slice(0, split));
    root.right = buildTree(preorder.slice(split + 1), inorder.slice(split + 1));
    
    return root;
};