/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;
    
    while (true) {
        const sum = numbers[l] + numbers[r]
        
        if (sum === target) {
            return [l + 1, r + 1];
        }
        
        if (sum < target) {
            l++
        } else {
            r--
        }
    }
};