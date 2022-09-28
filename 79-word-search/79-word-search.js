/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const path = new Set();
    const rowB = board.length;
    const colB = board[0].length;
    const wordLen = word.length;
    
    if (rowB * colB < wordLen) return false;
    
    const search = function(row, col, i) { 
        if (i === wordLen) return true;
        
        const rowInB = row >= 0 && row < rowB; 
        const colInB = col >= 0 && col < colB; 
        if (!rowInB || !colInB) return false;
        
        if (board[row][col] !== word[i]) return false;
        
        const mark = row + ',' + col;
        if (path.has(mark)) return false;
        path.add(mark);
    
        const res = (
            search(row - 1, col, i + 1) || search(row + 1, col, i + 1) || search(row, col + 1, i + 1) || search(row, col - 1, i + 1)
        );
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


