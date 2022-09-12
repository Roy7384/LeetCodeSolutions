/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const table = {}
    
    for (const num of nums) {
        if (num in table) {
            return true
        }
        table[num] = true
    }
    
    return false
};