/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let fresh = 0;
    const visited = new Set(); 
    const queue = [];
    
    for (let i = 0, n = grid.length; i < n; i++) {
        for (let j = 0, m = grid[0].length; j < m; j++) {
            const val = grid[i][j];
            
            if (val === 1) {
                fresh++
            } else if (val === 2) {
                queue.push([i, j])
                visited.add(`${i},${j}`)
            } else {
                visited.add(`${i},${j}`)
            }
        }
    }
    
    const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let time = 0;
    
    while(queue.length > 0) {
        const childSize = queue.length;
        for (let i = 0; i < childSize; i++) {
            const [row, col] = queue.shift();
            
            if (grid[row][col] === 1) {
                grid[row][col] = 2;
                fresh--
            }
            
            direction.forEach((d) => {
                const newRow = row + d[0];
                const newCol = col + d[1];
                
                const rowInBound = newRow >= 0 && newRow < grid.length;
                const colInBound = newCol >= 0 && newCol < grid[0].length;
                
                if (rowInBound && colInBound && !visited.has(`${newRow},${newCol}`)) {
                    queue.push([newRow, newCol]);
                    visited.add(`${newRow},${newCol}`);
                }
            })
        }
        time ++ 
    }
    if (fresh > 0) return -1;
    return time ? time - 1 : 0;
};


