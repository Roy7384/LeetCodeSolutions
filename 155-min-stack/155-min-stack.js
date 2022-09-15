
var MinStack = function() {
    this.stack = []
    this.minKeepTrack = []
};

/** 
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function(val) {
    const currentMin = this.minKeepTrack[this.minKeepTrack.length - 1] 
    if (currentMin === undefined || val < currentMin) {
        this.minKeepTrack.push(val)
    } else {
        this.minKeepTrack.push(currentMin)
    }
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minKeepTrack.pop()
   return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return this.stack[this.stack.length - 1] 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const currentMin = this.minKeepTrack[this.minKeepTrack.length - 1] 
    return currentMin
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */