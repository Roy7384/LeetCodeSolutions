/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const headSet = new Set();
    const result = [] 
    
    for (let i = 0, n = nums.length; i < n; i++) {
        const num = nums[i]
        
        if (headSet.has(num)) {
            continue;
        }
        headSet.add(num)
        
        const target = 0 - num
        let l = i + 1;
        let r = n - 1;
        
        while (l < r) {
            const numL = nums[l];
            const numR = nums[r];
            const sum = numL + numR
            if (sum === target) {
                result.push([num, numL, numR]) 
                l++ 
                while (nums[l] === numL) l++
                continue
            }
            if (sum < target) {
                l++
            } else {
                r--
            }
        }
    }
    
    return result
};