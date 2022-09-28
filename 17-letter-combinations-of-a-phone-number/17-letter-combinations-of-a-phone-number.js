/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        1: [],
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }
    
    let result = [];
    
    for (let digit of digits) {
        const chars = map[digit];
        if (result.length === 0) {
           result.push(...chars); 
        } else {
           const tempRes = [];
           for (let res of result) {
              for (let char of chars) {
                  tempRes.push(res + char);
              } 
           } 
           result = tempRes;
        }
    }
    
    return result;
};