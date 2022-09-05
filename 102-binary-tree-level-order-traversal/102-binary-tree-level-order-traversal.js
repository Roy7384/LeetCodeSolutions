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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    if (!root) return [];
    
    const result = [[root.val]];
    
    const queue = [];
    if (root.left) queue.push(root.left);
    if (root.right) queue.push(root.right);
    
    while (queue.length) {
        const ql = queue.length;
        const tempResult = [] 
        for (let i = 0; i < ql; i++) {
            const node = queue.shift();
            tempResult.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(tempResult)
    }
    
    return result
};