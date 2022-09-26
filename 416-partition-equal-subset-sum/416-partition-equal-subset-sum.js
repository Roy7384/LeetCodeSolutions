/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const targetSum = nums.reduce((sum, element) => sum += element) / 2;
    if (targetSum !== Math.floor(targetSum)) return false;
    
    let potentialSum = new Set();
    
    potentialSum.add(0);
    
    for (const num of nums) {
        const tempSum = new Set();
        for (const sum of potentialSum.values()) {
            const newSum = sum + num;
            if (newSum === targetSum) return true;
            tempSum.add(newSum);
            tempSum.add(sum);
        } 
        potentialSum = tempSum;
    }
    
    return false;
};

