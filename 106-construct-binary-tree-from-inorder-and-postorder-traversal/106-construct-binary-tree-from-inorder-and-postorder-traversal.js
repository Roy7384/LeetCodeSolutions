/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!postorder.length) return null;
    if (postorder.length === 1) return new TreeNode(inorder[0]);
    
    const rootVal = postorder.pop();
    
    const root = new TreeNode(rootVal);
    const split = inorder.indexOf(rootVal);
    
    root.left = buildTree(inorder.slice(0, split), postorder.slice(0, split));
    root.right = buildTree(inorder.slice(split + 1), postorder.slice(split));
    return root;
};