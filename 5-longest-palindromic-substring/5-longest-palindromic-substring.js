/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;
    
    const scanOutWard = function(l, r, n) {
        while (l >= 0 && r < n && s[l] === s[r]) {
            l --;
            r ++;
        }
        return r - l - 1;
    }
    
    for (let i = 0, n = s.length; i < n; i++) {
        // odd length
        const len1 = scanOutWard(i, i, n);
        // even length
        const len2 = scanOutWard(i, i + 1, n);
        
        const len = Math.max(len1, len2);
        
        if (len > end - start + 1) {
            start = i - Math.floor(((len - 1) / 2));
            end = i + Math.floor((len / 2));
        }
    }
    
    return s.slice(start, end + 1);
};