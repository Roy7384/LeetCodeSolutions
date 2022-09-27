/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = "";
    const scanOutWard = function(l, r, n) {
        while (l >= 0 && r < n && s[l] === s[r]) {
            if (r - l + 1 > result.length) result = s.slice(l, r + 1);
            l --;
            r ++;
        }
    }
    
    for (let i = 0, n = s.length; i < n; i++) {
        let l = i;
        let r = i;
        scanOutWard(l, r, n);
        
        l = i;
        r = i + 1;
        scanOutWard(l, r, n);
    }
    
    return result;
};