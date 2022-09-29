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
    
    let leafNodes = [];
    for (let node in adjList) {
        if (adjList[node].length === 1) leafNodes.push(Number(node));
    }
    
    let nodeLeft = n;
    
    while(nodeLeft > 2) {
        const currentLeafCount = leafNodes.length;
        nodeLeft -= currentLeafCount;
        
        let nextLeafQ = [];
        for (let leaf of leafNodes) {
            const parent = adjList[leaf].pop();
            delete adjList[leaf];
            adjList[parent].splice(adjList[parent].indexOf(leaf), 1);
            if (adjList[parent].length === 1) nextLeafQ.push(parent);
        }
        leafNodes = nextLeafQ;
    }
    
    return leafNodes;   
};