/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visit = new Set();
    let islandCounter = 0;
    
    for (let i = 0, n = grid.length; i < n; i++) {
        for (let j = 0, m = grid[0].length; j < m; j++) {
            if (explore(grid, i, j, visit, n, m)) islandCounter++ 
        }
    }
    
    return islandCounter;
    
};

function explore(matrix, row, col, visited, n, m) {
    const rowBound = 0 <= row && row < n;
    const colBound = 0 <= col && col < m;
    if (!rowBound || !colBound) return false;
    
    if (matrix[row][col] == 0) return false;
    
    const mark = row + ',' + col;
    if (visited.has(mark)) return false;
    visited.add(mark);
    
    explore(matrix, row + 1, col, visited, n, m);
    explore(matrix, row - 1, col, visited, n, m);
    explore(matrix, row, col + 1, visited, n, m);
    explore(matrix, row, col - 1, visited, n, m);
    
    return true
}