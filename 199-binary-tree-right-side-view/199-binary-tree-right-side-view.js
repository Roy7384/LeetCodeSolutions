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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [];
    queue.push([root, 1]);
    
    while (queue.length > 0) {
        const [node, depth] = queue.shift();
        
        if (depth !== result.length) result.push(node.val); 
        
        if (node.right) queue.push([node.right, depth + 1]);
        if (node.left) queue.push([node.left, depth + 1]);
    } 
    
    return result;
};