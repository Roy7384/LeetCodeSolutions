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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (k === 0) return root.val;
    const leftSubCount = countNode(root.left);
    if (leftSubCount === k - 1) return root.val;
    
    if (leftSubCount >= k) return kthSmallest(root.left, k);
    if (leftSubCount < k) return kthSmallest(root.right, k - leftSubCount - 1);
};

const countNode = function(node) {
    if (node === null) return 0;
    let result = 1;
    
    const leftResult = countNode(node.left);
    const rightResult = countNode(node.right);
    
    return result + leftResult + rightResult;
}