/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const table = new Array(m + 1).fill().map(_ => new Array(n + 1).fill(0));
    table[1][1] = 1; 
    
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if(i === 1 && j === 1) continue;
            table[i][j] = table[i - 1][j] + table[i][j - 1]
        }
    } 
    
    return table[m][n];
};