/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const adjList = {};
    
    for (const account of accounts) {
        const start = account[1];
        if (!(start in adjList)) adjList[start] = [];
        
        for (let i = 2, n = account.length; i < n; i++) {
            const neigh = account[i];
            if (neigh === start) continue;
            adjList[start].push(neigh);
            
            if (!(neigh in adjList)) adjList[neigh] = [];
            adjList[neigh].push(start);
        }
    } 
    
    const visited = new Set(); 
    const result = [];
    for (const account of accounts) {
        const mergedResult = dfs(adjList, visited, account[1], []);
        if (mergedResult) {
            mergedResult.sort();
            result.push([account[0], ...mergedResult])
        }
    }
    
    return result;
};

const dfs = function(adjList, visited, sourceEmail, mergedResult) {
    if (visited.has(sourceEmail)) return null;
    
    visited.add(sourceEmail);
    mergedResult.push(sourceEmail);
    
    for (const email of adjList[sourceEmail]) {
        dfs(adjList, visited, email, mergedResult);
    }
    
    return mergedResult;
}