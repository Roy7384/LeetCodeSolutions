/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const mark = function(a, b) {
    return a.toString() + ',' + b.toString();
}

var updateMatrix = function(mat) {
    const queue = [];
    const visited = new Set();
    const ans = [];
    
    const m = mat.length;
    const n = mat[0].length;
    
    mat.forEach((row, i) => {
        ans[i] = [] 
        row.forEach((num, j) => {
            ans[i][j] = 0;
            if (num === 0) {
                queue.push([i, j])
                visited.add(mark(i, j))
            }         
        })
    })
    
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    dist = 0;
    
    while (queue.length) {
        for (_ = 0, ql = queue.length; _ < ql; _ ++) {
            const [i, j] = queue.shift()
            if (mat[i][j] === 1) {
                ans[i][j] = dist
            }
            
            directions.forEach((d) => {
                ni = i + d[0]
                nj = j + d[1]
                
                if (ni < m && ni >= 0 && nj < n && nj >= 0 && !visited.has(mark(ni, nj))) {
                    queue.push([ni, nj]);
                    visited.add(mark(ni, nj));
                }
            })
            
        }
        dist ++
    }
    
    return ans 
};