/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const path = new Set();
    const rowB = board.length;
    const colB = board[0].length;
    
    const search = function(row, col, i) { 
        if (i === word.length) return true;
        
        const rowInB = row >= 0 && row < rowB; 
        const colInB = col >= 0 && col < colB; 
        if (!rowInB || !colInB) return false;
        
        if (board[row][col] !== word[i]) return false;
        
        const mark = row + ',' + col;
        if (path.has(mark)) return false;
        path.add(mark);
    
        const up = search(row - 1, col, i + 1);
        const down = search(row + 1, col, i + 1);
        const right = search(row, col + 1, i + 1);
        const left = search(row, col - 1, i + 1);
        const res = up || down || right || left; 
        path.delete(mark); 
        
        return res;
    }
    
    for (let i = 0, n = rowB; i < n; i++) {
        for (let j = 0, m = colB; j < m; j++) {
            if (board[i][j] === word[0]) {
                const searchRes = search(i, j, 0);
                if (searchRes) return true;
            }
        }
    } 
    
    return false;
};


