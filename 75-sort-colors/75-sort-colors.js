/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let index2 = nums.length - 1;
    let index0 = 0;
    let pointer = 0;
    
    while (pointer <= index2) {
        if (nums[pointer] === 0) {
            [nums[index0], nums[pointer]] = [nums[pointer], nums[index0]];
            index0++;
            pointer++
        } else if (nums[pointer] === 2) {
            [nums[index2], nums[pointer]] = [nums[pointer], nums[index2]];
            index2--;
        } else {
            pointer ++
        }
    }
};