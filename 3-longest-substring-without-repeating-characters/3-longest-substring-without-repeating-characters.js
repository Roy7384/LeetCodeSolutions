/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = new Set(); 
    
    for (let i = 0, n = s.length; i < n; i++) {
        const tempResult = new Set();
        tempResult.add(s[i])
        
        for (let j = i + 1; j < n; j++) {
            if (tempResult.has(s[j])) {
                break
            } else {
                tempResult.add(s[j])
            }
        }
        
        if (tempResult.size > result.size) {
            result = tempResult
        }
        
    }
    
    return result.size
};