/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    const tCharTable = {};
    for (const char of t) {
        if (!(char in tCharTable)) tCharTable[char] = 0;
        tCharTable[char]++
    }
    
    const sCharTable = {};
    let finalResult = "";
    let l = -1;
    let r = -1;
    
    while (r < s.length) {
        if (!compareTable(tCharTable, sCharTable)) {
            r++;
            if (!(s[r] in sCharTable)) sCharTable[s[r]] = 0;
            sCharTable[s[r]]++;
        } else if (r - l > t.length) {
            l++;
            sCharTable[s[l]]--;
            
            if (r - l < finalResult.length || !finalResult) {
                finalResult = s.slice(l, r + 1)
            }
        } else {
            return s.slice(l + 1, r + 1)
        }
    }
    
    return finalResult;
};



const compareTable = function(tableT, tableS) {
    for (let key in tableT) {
        if (tableS[key] === undefined || tableT[key] > tableS[key]) return false
    }
    return true
}