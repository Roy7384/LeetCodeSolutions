/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const charLookup = {};
    
    let result = 0;
    
    for (let i = 0, n = s.length; i < n; i++) {
        const char = s[i];
        
        if (!charLookup[char]) {
            charLookup[char] = 1
        } else {
            delete charLookup[char]
            result += 2;
        }
    }
    
    if (Object.keys(charLookup).length) result ++;
    
    return result;
};