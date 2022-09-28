/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];
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
    
    const result = [];
    backTrack(0, digits, map, result, []);
    
    return result;
};


const backTrack = function(index, digits, map, result, tempRes) {
    if (tempRes.length === digits.length) {
        result.push(tempRes.join(""));
        return;
    }
    
    for (let char of map[digits[index]]) {
        tempRes.push(char);
        backTrack(index + 1, digits, map, result, tempRes);
        tempRes.pop();
    }
}