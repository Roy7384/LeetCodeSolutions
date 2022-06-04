/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const parsedStr = s.replace(/\W|_/g, '').toLowerCase();
  
  for (let i = 0, n = parsedStr.length; i < n; i++) {
    if (parsedStr[i] !== parsedStr[n - i - 1]) {
      return false;
    }
  }
   
  return true;
};