/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const visited = new Set();
    let maxArea = 0;
    
    for (let i = 0, n = grid.length; i < n; i++) {
        for (let j = 0, m = grid[0].length; j < m; j++) {
            const islandArea = explore(grid, i, j, visited);
            if (islandArea > maxArea) maxArea = islandArea;
        }
    }
    
    return maxArea;
};


const explore = function(matrix, row, col, visitedSet) {
    const rowInbound = 0 <= row && row < matrix.length;
    const colInbound = 0 <= col && col < matrix[0].length;
    if (!rowInbound || !colInbound) return 0;
    
    if (matrix[row][col] === 0) return 0;
    
    const mark = `${row},${col}`;
    if (visitedSet.has(mark)) return 0;
    visitedSet.add(mark)
    
    let size = 1;
    size += explore(matrix, row + 1, col, visitedSet);
    size += explore(matrix, row - 1, col, visitedSet);
    size += explore(matrix, row, col + 1, visitedSet);
    size += explore(matrix, row, col - 1, visitedSet);
    
    return size
}