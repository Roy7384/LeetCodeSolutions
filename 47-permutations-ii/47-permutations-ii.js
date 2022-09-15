/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const table = {}
    
    for (let num of nums) {
        if (!(num in table)) table[num] = 0;
        table[num]++
    }
    
    const length = nums.length
    const result = []
    permute(table, [], result, length);
    
    return result;
}


const permute = function(table, tempRes, results, length) {
    if (tempRes.length === length) {
        results.push([...tempRes])
        return;
    } 
    
    for (let num in table) {
        if (table[num]) {
            tempRes.push(num);
            table[num]--;
            permute(table, tempRes, results, length)
            tempRes.pop();
            table[num]++;
        }
    }
}