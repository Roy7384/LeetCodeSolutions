/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    
    dp[0] = 0;
    
    for (let a = 1; a <= amount; a++) {
        for (let c of coins) {
            if (a - c >= 0) {
                dp[a] = Math.min(dp[a], 1 + dp[a - c])
            }
        }
    }
    
    if (dp[amount] === Infinity) return -1
    return dp[amount]
};