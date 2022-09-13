/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
        if (!node) return null;
    
    const visited = new Set();
    const clonedNodes = [];
    
    dfsExplore(node, clonedNodes, visited);
    
    return clonedNodes[node.val]
};


const dfsExplore = function(n, clonedN, visitedSet) {
    if (visitedSet.has(n.val)) return;
    
    visitedSet.add(n.val);
    if (!clonedN[n.val]) clonedN[n.val] = new Node(n.val);
    
    for (let nei of n.neighbors) {
        if (!clonedN[nei.val]) clonedN[nei.val] = new Node(nei.val);
        clonedN[n.val].neighbors.push(clonedN[nei.val]);
        dfsExplore(nei, clonedN, visitedSet);
    }
    
    return;
};