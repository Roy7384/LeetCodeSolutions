/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  const arrLen = nums.length;
  let sum = 0;
  let maxSum = nums[0];
  
  for (const num of nums) {
      if (sum < 0) sum = 0;
      sum += num;
      maxSum = Math.max(maxSum, sum);
  }
    
  return maxSum;
};