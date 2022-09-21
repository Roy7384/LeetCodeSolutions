/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    const swapValue = (index1, index2) => {
        const temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
    } 
    
    let indexFor2 = nums.length - 1;
    let indexFor0 = 0;
    let pointer = 0;
    
    while (pointer <= indexFor2) {
        if (nums[pointer] === 0) {
            swapValue(pointer, indexFor0)
            indexFor0++;
            pointer++
        } else if (nums[pointer] === 2) {
            swapValue(pointer, indexFor2)
            indexFor2--;
        } else {
            pointer ++
        }
    }
};