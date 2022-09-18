/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums[0] <= nums[nums.length -1]) {
        return binarySearch(nums, target)
    } else {
        const k = findK(nums);
        return binarySearch(nums, target, k);
    }
};



const binarySearch = function(arr, target, k) {
    let l, r;
    if (k !== undefined) {
       if (arr[0] <= target) {
           l = 0;
           r = k;
       } else {
           l = k + 1;
           r = arr.length - 1
       } 
    } else {
        l = 0;
        r = arr.length - 1;
    }
    
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const midVal = arr[mid];
        
        if (midVal > target) {
            r = mid - 1;
        } else if (midVal < target) {
            l = mid + 1;
        } else {
            return mid;
        }
    } 
    
    return -1;
}

const findK = function(arr) {
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        
        if (arr[mid] < arr[mid - 1]) {
            return mid - 1;
        } else if (arr[mid] > arr[0]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return mid;
}