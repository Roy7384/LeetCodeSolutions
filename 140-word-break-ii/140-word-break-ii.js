/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill().map(_ => []);
    dp[0] = [[]];
    
    for (let i = 0; i <= s.length; i++) {
        if (dp[i].length > 0) {
            const subStr = s.slice(i);
            for (let word of wordDict) {
                if (subStr.indexOf(word) === 0) {
                    for (let comb of dp[i]) {
                        dp[i + word.length].push([...comb, word])
                    }  
                }
            }
        }
    }
    
    const finalResult = dp[s.length].map(combination => combination.join(" "))

    return finalResult;
};