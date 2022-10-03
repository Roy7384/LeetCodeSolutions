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
    return inOrderTra(root, [0], k)[0];
}


const inOrderTra = function(root, counter, k) {
    if (root === null) return null; 
    
    if (root.left) {
        const result = inOrderTra(root.left, counter, k);
        if (result) return result;
    }
    
    counter[0] ++;
    if (counter[0] === k) return [root.val];
    
    if (root.right) {
        const result = inOrderTra(root.right, counter, k);
        if (result) return result;
    }
}