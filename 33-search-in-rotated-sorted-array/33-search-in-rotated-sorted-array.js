/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const midVal = nums[mid];
        
        if (midVal === target) return mid;
        
        if (target > midVal) {
            if (midVal < nums[0] && target > nums[nums.length - 1]) {
                r = mid - 1; 
            } else {
                l = mid + 1;
            }
        } else {
            if (midVal > nums[nums.length - 1] && target < nums[0]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    
    return -1;
}