/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let table = [[]];
    
    for (let num of nums) {
        const combination = table.map(comb => [num, ...comb]);
        table = [...table, ...combination];
    }
    
    return table;
}

