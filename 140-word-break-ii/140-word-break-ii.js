/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(undefined);
    dp = dp.map(_ => []);
    dp[s.length] = [[]];
    
    for (let i = s.length - 1; i >= 0; i--) {
        for (const word of wordDict) {
            const tempWord = s.slice(i, i + word.length);
            
            if (s.length - i >= word.length && tempWord === word) { 
                for (const combination of dp[i + word.length]) {
                    dp[i].push([word, ...combination]);
                } 
            }
        }
    }
    
    const finalResult = dp[0].map(combination => combination.join(" "))

    return finalResult;
};