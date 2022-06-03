/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
const table = {};
  
  for (let i = 0, n = nums.length; i < n; i++) {
    const num = nums[i];
    const diff = target - num;
    
    if (table[diff] >= 0) {
      return [table[diff], i];
    } else {
      table[num] = i;
    }
  }
};