const bSearch = function(arr, target) {
  if (!arr.length || target < arr[0][0]) return -1;
  
  let left = 0;
  let right = arr.length - 1;
  let mid;
  
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const midNum = arr[mid][0];
      
    if (target > midNum) {
      left = mid + 1;
    } else if (target < midNum) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  
  return left - 1;
};

const insert = function(intervals, newInterval) {
  
  if (!intervals.length) return [newInterval];
  // if newInterval is completely out of range of intervals
  if (newInterval[1] < intervals[0][0]) return [newInterval].concat(intervals);
  if (newInterval[0] > intervals[intervals.length - 1][1]) {
    intervals.push(newInterval);
    return intervals;
  }
  
  const [s, e] = newInterval;
  
  const sPosition = bSearch(intervals, s);
  const ePosition = bSearch(intervals, e);
  
  const toBeInsertEnd = Math.max(intervals[ePosition][1], newInterval[1]);
  
  if (sPosition === -1) {
    const headInt = [newInterval[0], toBeInsertEnd];
    return [headInt].concat(intervals.slice(ePosition + 1));
  }
    
  if (newInterval[0] > intervals[sPosition][1]) {
    const toBeInsert = [newInterval[0], toBeInsertEnd];
    return intervals.slice(0, sPosition + 1).concat([toBeInsert]).concat(intervals.slice(ePosition + 1));
  } else {
    const toBeInsert = [intervals[sPosition][0], toBeInsertEnd];
    return intervals.slice(0, sPosition).concat([toBeInsert]).concat(intervals.slice(ePosition + 1));
  }
  
};