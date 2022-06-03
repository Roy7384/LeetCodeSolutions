/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const bracketParis = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  const openBrackets = ["(", "{", "["];
  const keepTrackOpen = [];
  
  for (let i = 0, n = s.length; i < n; i++) {
    const char = s[i];
    if (openBrackets.includes(char)) {
      keepTrackOpen.push(char);
    } else if (bracketParis[char] === keepTrackOpen.pop()) {
      continue;
    } else {
      return false;
    }
  }
  
  return (!keepTrackOpen.length);
};