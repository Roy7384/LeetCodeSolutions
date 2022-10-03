/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const taskMap = new Map();
    
    let maxFreq = 0;
    let maxTasks = 0;
    
    for (const task of tasks) {
        let taskFreq = taskMap.has(task) ? taskMap.get(task) + 1 : 1;
        
        taskMap.set(task, taskFreq);
        
        if (taskFreq > maxFreq) {
            maxFreq = taskFreq;
            maxTasks = 1;
        } else if (taskFreq === maxFreq) {
            maxTasks++;
        }
         
    }
    
    return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxTasks); 
};