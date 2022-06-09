/**
 * @param {number} n
 * @return {number}
 */

const cache = new Map();

const climbStairs = function(n) {
    
    if (n === 1 || n === 2) {
        return n;
    }
    
    const storedResult = cache.get(n);
    
    if (storedResult !== undefined) {
        return storedResult;
    } 
    
    const sum = climbStairs(n - 1) + climbStairs(n - 2)
    cache.set(n, sum);
    
    return sum;
    
}