/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const adjList = {};
    
    for (const account of accounts) {
        const start = account[1]; 
        if (!(start in adjList)) {
            adjList[start] = [];
        } 
        adjList[start].push(...account.slice(2));
        for (const email of adjList[start]) {
            if (email === start) continue;
            if (!(email in adjList)) adjList[email] = [];
            adjList[email].push(start);
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
    
    if (sourceEmail in adjList) {
        for (const email of adjList[sourceEmail]) {
            dfs(adjList, visited, email, mergedResult);
        }
    }
    
    return mergedResult;
}