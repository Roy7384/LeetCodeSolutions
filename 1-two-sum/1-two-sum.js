/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for (let i = 0, n = nums.length; i < n; i ++) {
        const num = nums[i];
        const restArr = nums.slice(i + 1);
        for (let j = 0, m = restArr.length; j < m; j ++) {
            if ((num + restArr[j]) === target) {
                return [i, i + j + 1]
            }
        }
    }
};