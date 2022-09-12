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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    
    const queue = [root];
    
    while (queue.length) {
        const nodeToExplore = queue.shift();
        const leftChild = nodeToExplore.left;
        const rightChild = nodeToExplore.right;
        
        if (leftChild) queue.push(leftChild);
        if (rightChild) queue.push(rightChild);
        
        const diameter = exploreMax(leftChild) + exploreMax(rightChild)
        maxDiameter = Math.max(diameter, maxDiameter)
    }
    
    return maxDiameter;
};


const exploreMax = function(node) {
    if (!node) return 0;
     
    let maxLength = Math.max(exploreMax(node.left), exploreMax(node.right));
    
    return maxLength + 1;
}