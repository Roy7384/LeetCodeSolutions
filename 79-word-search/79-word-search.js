/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const used = new Set();
    
    const search = function(row, col, i) { 
        if (i === word.length) return true;
        
        const rowInB = row >= 0 && row < board.length; 
        const colInB = col >= 0 && col < board[0].length; 
        if (!rowInB || !colInB) return false;
        
        if (board[row][col] !== word[i]) return false;
        
        const mark = row + ',' + col;
        if (used.has(mark)) return false;
        used.add(mark);
    
        const res = (
            search(row - 1, col, i + 1) || search(row + 1, col, i + 1) || search(row, col + 1, i + 1) || search(row, col - 1, i + 1)
        );
        used.delete(mark); 
        
        return res;
    }
    
    for (let i = 0, n = board.length; i < n; i++) {
        for (let j = 0, m = board[0].length; j < m; j++) {
            if (board[i][j] === word[0]) {
                const searchRes = search(i, j, 0);
                if (searchRes) return true;
            }
        }
    } 
    
    return false;
};


