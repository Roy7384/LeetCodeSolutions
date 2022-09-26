/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    
    for (let i = 0; i <= s.length; i++) {
        if (dp[i]) {
            const subStr = s.slice(i);
            for (let word of wordDict) {
                if (subStr.indexOf(word) === 0) {
                    dp[i + word.length] = true;
                }
            }
        }
    }
    
    return dp[s.length];
};