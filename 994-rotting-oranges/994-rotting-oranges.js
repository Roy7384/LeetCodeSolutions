/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const fresh = new Set();
    const visited = new Set(); 
    const queue = [];
    
    for (let i = 0, n = grid.length; i < n; i++) {
        for (let j = 0, m = grid[0].length; j < m; j++) {
            const val = grid[i][j];
            
            if (val === 1) {
                fresh.add(`${i},${j}`)
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
            grid[row][col] = 2;
            fresh.delete(`${row},${col}`);
            
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
    if (fresh.size > 0) return -1;
    if (time === 0) return time;
    return time - 1;
};


