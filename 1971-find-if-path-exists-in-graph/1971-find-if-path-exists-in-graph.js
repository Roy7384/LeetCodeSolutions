/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {

    const adjList = {};
    
    for (const edge of edges) {
        const [v1, v2] = edge;
        
        if (!(v1 in adjList)) adjList[v1] = [];
        if (!(v2 in adjList)) adjList[v2] = [];
        adjList[v1].push(v2);
        adjList[v2].push(v1);
    }
    
    const stack = [source];
    const visited = new Set();
    
    while(stack.length > 0) {
        const currentNode = stack.pop();
        
        if (currentNode === destination) return true;
        
        if (visited.has(currentNode)) continue;
        visited.add(currentNode);
        
        for (let neigh of adjList[currentNode]) {
            stack.push(neigh);
        }
    }
    
    return false;
}

/*
const dfs = function(node, adjList, visited, destination) {
    if (visited.has(node)) return;
    if (node === destination) return true;
    visited.add(node);
    
    for (const neigh of adjList[node]) {
       if (dfs(neigh, adjList, visited, destination)) return true;
    }
    
    return false;
}
*/