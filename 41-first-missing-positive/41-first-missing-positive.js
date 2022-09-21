/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    for (let i = 0, n = nums.length; i < n; i++) {
        if (nums[i] < 0) nums[i] = 0;
    }
    
    for (let num of nums) {
        if (num < 0) {
           num = num * -1; 
        }
        if (num > 0) {
            const value = nums[num - 1];
            
            if (value > 0) nums[num - 1] = value * -1;
            if (value === 0) nums[num - 1] = num * -1;
        }
    }
    
    for (let i = 0, n = nums.length; i < n; i++) {
        if (nums[i] >= 0) return i + 1;
    }
    return nums.length + 1
};