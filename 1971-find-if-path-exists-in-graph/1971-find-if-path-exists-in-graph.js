/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const vertices = new Array(n).fill(null);
    const groups = vertices.map((_, index) => index); 
    
    for (const edge of edges) {
        const [v1, v2] = edge; 
        union(v1, v2, groups);
    }
    
    return find(source, groups) === find(destination, groups);
};


const union = (x, y, group) => {
    let rootX = find(x, group);
    let rootY = find(y, group);
    
    if (rootX !== rootY) group[rootX] = rootY;
}

const find = (x, group) => {
    if (x === group[x]) return x
    
    return find(group[x], group);
}