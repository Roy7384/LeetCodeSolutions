/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjList = buildAdjList(prerequisites);
    
    const visited = new Set();
    
    for (let key in adjList) {
        if (!dfs(visited, adjList, Number(key))) return false
        visited.delete(Number(key));
    }
    
    return true;
};

const dfs = function(visited, adjList, currentCourse) {
    if (visited.has(currentCourse)) return false;
    
    visited.add(currentCourse);
    
    if (!adjList[currentCourse]) return true;
    
    for (let nei of adjList[currentCourse]) {
        if (!dfs(visited, adjList, nei)) return false
        visited.delete(nei);
    }
    adjList[currentCourse] = null;
    return true;
}

const buildAdjList = function(arr) {
    const adj = {};
    
    for (let relation of arr) {
        if (!(relation[0] in adj)) adj[relation[0]] = [];
        adj[relation[0]].push(relation[1]);
    }
    
    return adj;
}

