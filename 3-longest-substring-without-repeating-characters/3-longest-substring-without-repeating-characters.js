/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let tempResult = new Set();
    
    let i = 0;
    
    for (let j = 0, n = s.length; j < n; j++) {

        if (!tempResult.has(s[j])) {
            tempResult.add(s[j])
        } else {
            if (maxLen < tempResult.size) {
                maxLen = tempResult.size
            }
            while(tempResult.has(s[j])) {
                tempResult.delete(s[i])
                i ++
            }
            tempResult.add(s[j])
        }
    }
    
    if (maxLen < tempResult.size) {
        maxLen = tempResult.size
    }
    
    return maxLen
};