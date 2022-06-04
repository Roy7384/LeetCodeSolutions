/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let sum = 0;
  let maxSum = nums[0];
  
  for (let i = 0, n = nums.length; i < n; i++) {
      if (sum < 0) sum = 0;
      sum += nums[i];
      maxSum = Math.max(maxSum, sum);
  }
    
  return maxSum;
};