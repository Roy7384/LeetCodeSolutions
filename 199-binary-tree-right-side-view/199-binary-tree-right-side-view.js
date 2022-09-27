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
    queue.push([root, 0]);
    
    while (queue.length > 0) {
        const currentNode = queue.shift();
        
        if (result.length === 0 || currentNode[1] !== result[result.length - 1][1]) result.push(currentNode); 
        
        if (currentNode[0].right) queue.push([currentNode[0].right, currentNode[1] + 1]);
        if (currentNode[0].left) queue.push([currentNode[0].left, currentNode[1] + 1]);
    } 
    
    return result.map(re => re[0].val);
};