/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    const count = {
        0: 0,
        1: 0,
        2: 0
    }
    
    for (const num of nums) {
        count[num]++
    }
    
    for (let i = 0, n = nums.length; i < n; i++) {
        if (i < count[0]) {
            nums[i] = 0;
            continue;
        }
        if (i < count[0] + count[1]) {
            nums[i] = 1;
            continue;
        }
        nums[i] = 2;
    }
};