/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let productFromFront = 1;
    const result = [] 
    for (let i = 0, n = nums.length; i < n; i++) {
        result[i] = productFromFront;
        productFromFront *= nums[i];
    }
    
    let productFromBack = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] *= productFromBack;
        productFromBack *= nums[j];
    }
    
    return result;
};