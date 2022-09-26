/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const target = nums.reduce((sum, num) => sum += num) / k;
    if (target !== Math.floor(target)) return false;
    
    nums.sort((a, b) => b - a);
    
    const used = new Array(nums.length).fill(false);
        
    const backTrack = function (i, k, subsetSum) {
        if (k === 1) return true;
        
        if (subsetSum === target) return backTrack(0, k - 1, 0);
        
        for (let j = i, n = nums.length; j < n; j++) {
            if (used[j] || subsetSum + nums[j] > target) continue;
            used[j] = true;
            if (backTrack(j + 1, k, subsetSum + nums[j])) return true;
            used[j] = false;
        }
        return false;
    }
    
    return backTrack(0, k, 0);
};
