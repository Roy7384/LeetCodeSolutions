/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visit = new Set();
    let islandCounter = 0;
    
    for (let i = 0, n = grid.length; i < n; i++) {
        for (let j = 0, m = grid[0].length; j < m; j++) {
            if (grid[i][j] == 1 && !visit.has(`${i},${j}`)) {
                islandCounter ++;
                markNeigh(grid, [i, j], visit, direction, n, m);
            }      
        }
    }
    
    return islandCounter;
    
};

function markNeigh (matrix, origin, visited, direction, n, m) {
    direction.forEach((d) => {
        const [i, j] = origin
        const ni = d[0] + i;
        const nj = d[1] + j;
        
        if (ni >= 0 && ni < n && nj >= 0 && nj < m && matrix[ni][nj] == matrix[i][j] && !visited.has(`${ni},${nj}`)) {
            visited.add(`${ni},${nj}`);
            markNeigh(matrix, [ni, nj], visited, direction, n, m);
        }
    })
}