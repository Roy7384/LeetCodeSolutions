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
    
    const queue = [node];
    
    while(queue.length) {
        const n = queue.shift();
        if(visited.has(n.val)) continue;
        
        visited.add(n.val);
        
        let clonedNode;
        
        if (!clonedNodes[n.val]) {
            clonedNode = new Node(n.val);
            clonedNodes[n.val] = clonedNode;
        } else {
            clonedNode = clonedNodes[n.val]
        }
        
        for (let nei of n.neighbors) {
            queue.push(nei);
            
            if (clonedNodes[nei.val]) {
                clonedNode.neighbors.push(clonedNodes[nei.val])
            } else {
                const newNei = new Node(nei.val);
                clonedNodes[nei.val] = newNei;
                clonedNode.neighbors.push(clonedNodes[nei.val])
            }
        }
    }
    
    return clonedNodes[1]
};

