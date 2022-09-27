/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]];
    
    for (let i = nums.length; i > 0; i--) {
        backTrack(0, [], result, nums.slice(0, i));     
    }
    
    return result
};

const backTrack = function(i, tempResult, result, nums) {
    if (i === nums.length) {
        result.push([...tempResult]);
        return;
    }

    for (let j = i, n = nums.length; j < n; j++) {
        tempResult.push(nums[j]);
        backTrack(j + 1, tempResult, result, nums);
        tempResult.pop();
    }
}
