/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = [] 
    
    for (let i = 0, n = s.length; i < n; i++) {
        const tempResult = [s[i]];
        
        for (let j = i + 1; j < n; j++) {
            if (tempResult.includes(s[j])) {
                break
            } else {
                tempResult.push(s[j])
            }
        }
        
        if (tempResult.length > result.length) {
            result = tempResult
        }
        
    }
    
    return result.length
};