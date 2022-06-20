/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const charCount = {}
    for (let i = 0, n = s.length; i < n; i++) {
        const char = s[i];
        
        if (charCount[char]) {
            charCount[char] ++
        } else {
            charCount[char] = 1
        }
    }
    
    let result = 0;
    
    for (const char in charCount) {
        if (charCount[char] > 1) {
            const usableCount = charCount[char] - charCount[char] % 2
            charCount[char] -= usableCount;
            result += usableCount;
        }
    }
    
    for (const char in charCount) {
        if (charCount[char] === 1) {
           result ++;
            break;
        }
    } 
    
    return result;
};