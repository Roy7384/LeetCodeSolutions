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
    return inOrderTra(root, [], k)[0];
}


const inOrderTra = function(root, arr, k) {
    if (root === null) return null; 
    
    if (root.left) {
        const result = inOrderTra(root.left, arr, k);
        if (result) return result;
    }
    
    arr.push(root.val);
    if (arr.length === k) return [arr[k - 1]];
    
    if (root.right) {
        const result = inOrderTra(root.right, arr, k);
        if (result) return result;
    }
}