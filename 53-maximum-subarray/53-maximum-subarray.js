/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let l = 0;
  let r = 0;
  const arrLen = nums.length;
  let sum;
  let maxSum = -Infinity;
  
  while (r < arrLen) {
    if (l === r) {
      sum = nums[l];
    } else {
      sum = sum + nums[r];
    }
    
    r ++;
      
    if (sum < 0) l = r;
    maxSum = Math.max(maxSum, sum);
    
  }
  
    
  return maxSum;
};