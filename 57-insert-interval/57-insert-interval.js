/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
    const result = [];
    
    for (let i = 0, n = intervals.length; i < n; i++) {
        if (newInterval[1] < intervals[i][0]) {
            result.push(newInterval);
            return result.concat(intervals.slice(i));
        }
        
        if (newInterval[0] > intervals[i][1]) {
            result.push(intervals[i]);
            continue;
        }
        
        const newStart = Math.min(newInterval[0], intervals[i][0]);
        const newEnd = Math.max(newInterval[1], intervals[i][1]);
        newInterval = [newStart, newEnd];
    }
    result.push(newInterval); 
    return result;
};