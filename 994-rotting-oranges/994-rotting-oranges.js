/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let fresh = 0;
    const queue = [];
    
    for (let i = 0, n = grid.length; i < n; i++) {
        for (let j = 0, m = grid[0].length; j < m; j++) {
            const val = grid[i][j];
            if (val === 1) fresh++;
            if (val === 2) queue.push([i, j]);
        }
    }
    
    const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let time = 0;
    
    while(queue.length > 0 && fresh > 0) {
        const nodeSize = queue.length;
        for (let i = 0; i < nodeSize; i++) {
            const [row, col] = queue.shift();
            
            direction.forEach(([dr, dc]) => {
                const newRow = row + dr;
                const newCol = col + dc;
                
                const rowInBound = newRow >= 0 && newRow < grid.length;
                const colInBound = newCol >= 0 && newCol < grid[0].length;
                
                if (rowInBound && colInBound && grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    fresh--;
                    queue.push([newRow, newCol]);  
                } 
            })
        }
        time++;
    }
    return fresh === 0 ? time : -1;
};


