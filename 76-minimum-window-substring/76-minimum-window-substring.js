/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return "" 
    
    const tCharTable = {};
    for (const char of t) {
        if (!(char in tCharTable)) tCharTable[char] = 0;
        tCharTable[char]++
    }
    
    const sCharTable = {};
    let subStart, subEnd;
    let l = -1;
    let r = -1;
    
    while (r < s.length) {
        if (!compareTable(tCharTable, sCharTable)) {
            r++;
            if (!(s[r] in sCharTable)) sCharTable[s[r]] = 0;
            sCharTable[s[r]]++;
        } else if (r - l > t.length) {
            if (r - l < subEnd - subStart || subStart === undefined) {
                subEnd = r + 1;
                subStart = l + 1;
            }
            l++;
            sCharTable[s[l]]--;
        } else {
            return s.slice(l + 1, r + 1)
        }
    }
    
    if (subStart === undefined) return ""
    return s.slice(subStart, subEnd);
};



const compareTable = function(tableT, tableS) {
    for (let key in tableT) {
        if (tableS[key] === undefined || tableT[key] > tableS[key]) return false
    }
    return true
}