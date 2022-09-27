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
    
    const rightSides = [];
    const queue = [];
    queue.push([root, 0]);
    
    while (queue.length > 0) {
        const [node, depth] = queue.shift();
        
        if (rightSides.length === 0 || depth !== rightSides[rightSides.length - 1][1]) rightSides.push([node, depth]); 
        
        if (node.right) queue.push([node.right, depth + 1]);
        if (node.left) queue.push([node.left, depth + 1]);
    } 
    
    return rightSides.map(([node, depth]) => node.val);
};