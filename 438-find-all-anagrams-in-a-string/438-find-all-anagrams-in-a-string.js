/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (p.length > s.length) return [];
    
    const charCount = {};
    const subCount = {}; 
    
    for (let i = 0, n = p.length; i < n; i++) {
        if (!(p[i] in charCount)) charCount[p[i]] = 0;
        charCount[p[i]]++;
        
        if (!(s[i] in subCount)) subCount[s[i]] = 0;
        subCount[s[i]]++;
    }
    
    const compare = function() {
        for (let char in subCount) {
            if (!(char in charCount)) return false;
            if (subCount[char] !== charCount[char]) return false;
        }
        return true;
    }
    
    const result = [];
    let l = 0;
    let r = p.length - 1;
    
    while (r < s.length) {
        if (compare()) result.push(l);
        
        subCount[s[l]]--;
        if (subCount[s[l]] === 0) delete subCount[s[l]]
        l++;
        r++;
        if (!(s[r] in subCount)) subCount[s[r]] = 0;
        subCount[s[r]]++;
    }
     
    return result;
};


