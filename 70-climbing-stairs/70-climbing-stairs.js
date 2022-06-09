/**
 * @param {number} n
 * @return {number}
 */


const climbStairs = function(n) {
    
    const dpArr = [];
    dpArr[n] = 1;
    dpArr[n - 1] = 1;
    let count = n - 2;
     
    while(dpArr[0] === undefined) {
        dpArr[count] = dpArr[count + 1] + dpArr[count + 2];
        
        count --;
    }
    
    return dpArr[0];
}