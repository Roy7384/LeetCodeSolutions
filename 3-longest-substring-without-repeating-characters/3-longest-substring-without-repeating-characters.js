/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = []
    let tempResult = []
    
    for (let i = 0, n = s.length; i < n; i++) {
        const occur = tempResult.indexOf(s[i]);

        if (occur === -1) {
            tempResult.push(s[i])
        } else {
            if (result.length < tempResult.length) {
                result = tempResult
            }
            tempResult = tempResult.slice(occur + 1);
            tempResult.push(s[i])
        }
    }
    
    if (result.length < tempResult.length) {
        result = tempResult
    }
    
    return result.length
};