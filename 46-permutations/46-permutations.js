/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    create(nums, [], result, new Set())
    return result;
};


const create = function(nums, tempRes, results, usedSet) {
    if (tempRes.length === nums.length) {
        results.push([...tempRes])
        return
    }
    
    for (let num of nums) {
        if (usedSet.has(num)) continue;
        
        usedSet.add(num);
        tempRes.push(num);
        create(nums, tempRes, results, usedSet)
        tempRes.pop();
        usedSet.delete(num);
    }
}