/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  
  const str1Size = s.length;
  const str2Size = t.length;
  
  if (str1Size !== str2Size) return false;
  
  const countChar = function (table, str) {
    for (let i = 0, n = str.length; i < n; i++) {
      if (!table[str[i]]) {
        table[str[i]] = 1;
      } else {
        table[str[i]] ++;
      }
    }
  }

  const table1 = {}
  const table2 = {}
  countChar(table1, s);
  countChar(table2, t);
  
  for (const key in table1) {
    if (table1[key] !== table2[key]) {
      return false
    }
  } 
  return true;
  
};