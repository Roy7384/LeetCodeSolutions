/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const dist = (point) => { return Math.pow(point[0], 2) + Math.pow(point[1], 2)}
    
    let min = Infinity;
    let result = [];
    let index;
    
    while (k) {
        points.forEach((p, i) => {
            const distToO = dist(p)
            if (distToO < min) {
                min = distToO
                index = i
            }
        })
        result.push(points[index]) 
        points[index] = [Infinity, Infinity];
        min = Infinity;
        k --
    }
    
    return result; 
};