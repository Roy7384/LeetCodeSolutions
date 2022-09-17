/**
 * Definition for a binary tree node.
 * function Treenode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Treenode} node
 * @return {boolean}
 */
var isValidBST = function(root) {
    return dfs(root).result   
};

const dfs = function(node) {
    let rightResult = true;
    let maxVal = node.val; 
    if (node.right) {
        const valCompare = node.val < node.right.val;
        const rightSubTree = dfs(node.right); 
        maxVal = rightSubTree.maxVal;
        const rightMinVal = rightSubTree.minVal;  
        rightResult = valCompare && rightSubTree.result && rightMinVal > node.val; 
    }
    
    let leftResult = true;
    let minVal = node.val;
    if (node.left) {
        const valCompare = node.val > node.left.val;
        const leftSubTree = dfs(node.left);
        minVal = leftSubTree.minVal;
        const leftMaxVal = leftSubTree.maxVal;
        leftResult = valCompare && leftSubTree.result && leftMaxVal < node.val;
    }
    
    minVal = Math.min(minVal, node.val);
    maxVal = Math.max(maxVal, node.val);
    const result = rightResult && leftResult
    return {result, minVal, maxVal}
}
