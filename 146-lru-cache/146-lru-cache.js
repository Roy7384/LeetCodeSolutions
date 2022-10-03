/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.data = new Map();
    this.cap = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const result = this.data.get(key); 
    if (result === undefined) return -1;
    this.data.delete(key);
    this.data.set(key, result);
    return result;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.data.has(key)) {
        this.data.delete(key);
    } 
    this.data.set(key, value);
    if (this.data.size > this.cap) {
        this.data.delete(this.data.keys().next().value);
    }
};


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */