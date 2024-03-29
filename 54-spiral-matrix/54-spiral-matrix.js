/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let turnCount = 0;
    
    const visited = new Set();
    const result = []
    
    const rowBound = matrix.length;
    const colBound = matrix[0].length;
    const totalElement = rowBound * colBound;
    
    let row = 0;
    let col = 0;
    result.push(matrix[row][col]);
    visited.add(row + ',' + col)
    
    while (result.length < totalElement) {
        let newRow = directions[turnCount][0] + row;
        let newCol = directions[turnCount][1] + col;
        
        const rowInB = newRow >= 0 && newRow < rowBound; 
        const colInB = newCol >= 0 && newCol < colBound; 
        const mark = newRow + ',' + newCol;
        
        if(!rowInB || !colInB || visited.has(mark)) {
            turnCount++;
            turnCount = turnCount % 4;
        } else {
            result.push(matrix[newRow][newCol]);
            visited.add(mark);
            row = newRow;
            col = newCol;
        }
    }
    
    return result; 
};