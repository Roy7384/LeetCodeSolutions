/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[s.length] = true;
    
    for (let i = s.length - 1; i >= 0; i--) {
        for (const word of wordDict) {
            if (s.length - i >= word.length) {
                const tempWord = s.slice(i, i + word.length);

                if (tempWord === word) {
                    dp[i] = dp[i + word.length];
                    if (dp[i]) break;
                }
            }
        } 
    }
    
    return dp[0];
};