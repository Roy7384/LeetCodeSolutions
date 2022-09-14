/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    for (let number of nums) {
      create(number, nums, [], result);
    }
    return result;
};


const create = function(num, nums, tempRes, results) {
    tempRes.push(num);
    
    if (tempRes.length === nums.length) {
        results.push([...tempRes]);
        return;
    }
    
    for (let number of nums) {
        
        if (tempRes.includes(number)) continue
        
        create(number, nums, tempRes, results);
        tempRes.pop();
    }
}