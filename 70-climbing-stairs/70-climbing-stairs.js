/**
 * @param {number} n
 * @return {number}
 */

const cache = {};

const climbStairs = function(n) {
    
    if (n === 1 || n === 2) {
        return n;
    }
    
    const storedResult = cache[n.toString()];
    
    if (storedResult !== undefined) {
        return storedResult;
    } 
    
    
    const sum = climbStairs(n - 2) + climbStairs(n - 1)
    cache[n.toString()] = sum;
    
    return sum;
    
}