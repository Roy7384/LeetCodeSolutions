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
    
    
    const result2 = climbStairs(n - 2);
    cache[(n - 2).toString()] = result2;
    
    const result1 = climbStairs(n - 1);
    cache[(n - 1).toString()] = result1;
    
    return result1 + result2;
    
}