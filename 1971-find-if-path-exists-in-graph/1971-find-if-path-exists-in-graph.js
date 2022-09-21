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
    
    const union = (x, y) => {
        let rootX = find(x);
        let rootY = find(y);

        if (rootX !== rootY) groups[rootX] = rootY;
    }

    const find = (x) => {
        if (x === groups[x]) return x

        return find(groups[x]);
    }
    
    for (const edge of edges) {
        const [v1, v2] = edge; 
        union(v1, v2);
    }
    
    return find(source) === find(destination);
};


