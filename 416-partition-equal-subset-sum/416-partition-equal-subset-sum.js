/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const targetSum = nums.reduce((sum, element) => sum += element) / 2;
    if (targetSum !== Math.floor(targetSum)) return false;
    
    let potentialSum = new Set();
    
    potentialSum.add(0);
    
    for (let i = 0, n = nums.length; i < n; i++) {
        const tempSum = new Set();
        for (const ele of potentialSum.values()) {
            const newSum = ele + nums[i];
            if (newSum === targetSum) return true;
            tempSum.add(newSum);
            tempSum.add(ele);
        } 
        potentialSum = tempSum;
    }
    
    return false;
};

