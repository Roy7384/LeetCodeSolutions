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
    
    const compare = function(diff) {
        if (diff in subCount) return diff;
        for (let char in subCount) {
            if (!(char in charCount)) return char;
            if (subCount[char] !== charCount[char]) return false;
        }
        return true;
    }
    
    const result = [];
    let l = 0;
    let r = p.length - 1;
    let diff = compare();
    
    if (diff === true) result.push(l);
    
    while (r < s.length) {
        
        subCount[s[l]]--;
        if (subCount[s[l]] === 0) delete subCount[s[l]]
        l++;
        r++;
        if (!(s[r] in subCount)) subCount[s[r]] = 0;
        subCount[s[r]]++;
        
        diff = compare(diff);
        if (diff === true) result.push(l);
    }
     
    return result;
};


