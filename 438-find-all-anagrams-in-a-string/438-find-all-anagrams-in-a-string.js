/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const charCount = {};
    for (let char of p) {
        if (!(char in charCount)) charCount[char] = 0;
        charCount[char]++;
    }
    const compare = function(i) {
        const subCount = {};

        for (let j = i; j < i + p.length; j++) {
            const char = s[j];
            if (!(char in charCount)) return j;
            if (!(char in subCount)) subCount[char] = 0;
            subCount[char] ++;
            if (subCount[char] > charCount[char]) return false
        }

        return true;
    }
    
    const result = []; 
    for (let i = 0, n = s.length; i < n; i++) {
        if (s.length - i < p.length) return result;
       
        const compareRes = compare(i);
        if (typeof compareRes === "number") {
            i = compareRes;
            continue;
        }
        if (compareRes === true) result.push(i);
    }
    
    return result;
};


