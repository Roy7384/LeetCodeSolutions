/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 0) return [];
    if (n === 1) return [0];
    
    const adjList = {};
    
    for (let edge of edges) {
        const [a, b] = edge;
        
        if (!(a in adjList)) adjList[a] = [];
        if (!(b in adjList)) adjList[b] = [];
        
        adjList[a].push(b);
        adjList[b].push(a);
    }
    
    const leafNodes = [];
    for (let node in adjList) {
        if (adjList[node].length === 1) leafNodes.push(Number(node));
    }
    
    let nodeLeft = n;
    
    while(nodeLeft > 2) {
        const currentLeafCount = leafNodes.length;
        nodeLeft -= currentLeafCount;
        
        for (let i = 0; i < currentLeafCount; i++) {
            const leafNode = leafNodes.pop();
            const parent = adjList[leafNode].pop();
            adjList[parent].splice(adjList[parent].indexOf(leafNode), 1);
            delete adjList[leafNode];
        }
        
        for (let node in adjList) {
            if (adjList[node].length === 1 || adjList[node].length === 0) leafNodes.push(Number(node));
        }
    }
    
    return leafNodes;   
};