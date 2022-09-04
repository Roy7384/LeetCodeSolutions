/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let tempResult = new Set();
    
    let i = 0;
    
    for (let j = 0, n = s.length; j < n; j++) {
        const char = s[j]
        while(tempResult.has(char)) {
            tempResult.delete(s[i])
            i++
        }
        tempResult.add(char)
        maxLen = maxLen < tempResult.size ? tempResult.size : maxLen
    }
    
    return maxLen
};