/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    
    let currentInt = intervals[0];
    for (let i = 1, n = intervals.length; i < n; i++) {
        const newInterval = intervals[i];
        
        if (newInterval[1] >= currentInt[0] && newInterval[0] <= currentInt[1]) {
            currentInt[0] = Math.min(currentInt[0], newInterval[0]);
            currentInt[1] = Math.max(currentInt[1], newInterval[1]);
        } else {
            result.push(currentInt);
            currentInt = newInterval;
        }
    }
    result.push(currentInt)
    
    return result;
};