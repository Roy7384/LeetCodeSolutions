/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  const middleIndex = Math.floor(nums.length / 2);
  
  if (target < nums[middleIndex]) {
    return search(nums.slice(0, middleIndex), target);
  } else if (target > nums[middleIndex]) {
    const result = search(nums.slice(middleIndex + 1), target);
    return result === -1 ? result : result + middleIndex + 1; 
  } else if (target === nums[middleIndex]) {
    return middleIndex;
  } else {
    return -1;
  }
};