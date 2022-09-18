/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    
    const dfs = function(i, curComb, total) {
        if (total === target) {
            result.push([...curComb])
            return;
        }
        if (i >= candidates.length || total > target) return;
        
        const curNum = candidates[i]; 
        curComb.push(curNum);
        dfs(i, curComb, total + curNum);
        curComb.pop();
        dfs(i + 1, curComb, total);
    }
    
    dfs(0, [], 0);
    return result;
}


