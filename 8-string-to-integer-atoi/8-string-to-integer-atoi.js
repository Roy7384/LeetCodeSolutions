/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let cleanS = s.trim();
    let numStr = '';
    let sign;
    
    if (cleanS[0] === "-") {
        sign = false;
        cleanS = cleanS.slice(1);
    } else if (cleanS[0] === "+") {
        sign = true;
        cleanS = cleanS.slice(1);
    } else {
        sign = true;
    }
    
    for (let char of cleanS) {
        const charCode = char.charCodeAt(0);
        
        if (charCode >= 48 && charCode <= 57) {
            numStr += char;
        } else {
            break;
        }
    }
    
    if (sign === undefined) sign = true;
    
    const number = sign ? Number(numStr) : -1 * Number(numStr);
    
    const upperB = Math.pow(2, 31) - 1;
    const lowerB = -Math.pow(2, 31);
    
    if (number > upperB) return upperB;
    if (number < lowerB) return lowerB;
    return number;
};