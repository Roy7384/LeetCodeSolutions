/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let accumulator = 1;
    const result = [] 
    for (let i = 0, n = nums.length; i < n; i++) {
        result[i] = accumulator;
        accumulator *= nums[i];
    }
    
    accumulator = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] *= accumulator;
        accumulator *= nums[j];
    }
    
    return result;
};