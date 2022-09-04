/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    
    const dist = (p) => Math.pow(p[0], 2) + Math.pow(p[1], 2);
    
    points = points.sort((a, b) => dist(a) - dist(b));
    
    return points.slice(0, k); 
};