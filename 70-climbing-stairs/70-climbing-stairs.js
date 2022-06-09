/**
 * @param {number} n
 * @return {number}
 */


const climbStairs = function(n) {
    
    let [dp1, dp2] = [1, 1];
    
    let count = n - 2;
     
    while(count >= 0) {
        
        const temp = dp1;
        dp1 = dp1 + dp2;
        dp2 = temp;
        
        count --;
    }
    
    return dp1;
}