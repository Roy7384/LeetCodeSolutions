/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = [null];
    for (let num of nums) {
        this.insert(num);
    };
    while(this.heap.length - 1 > k) {
        this.rmInHeap();
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.insert(val);
    if (this.heap.length - 1 > this.k) this.rmInHeap();
    return this.heap[1];
};

KthLargest.prototype.insert = function(num) {
    this.heap.push(num);
    
    if(this.heap.length > 2) {
        let idx = this.heap.length - 1;
        while(this.heap[idx] < this.heap[Math.floor(idx/2)]) {
            const parent = Math.floor(idx/2);
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            if (parent === 1) break;
            idx = parent;
        }
    }
};

KthLargest.prototype.rmInHeap = function() {
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
            [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
    } else {
        let i = 1;
        let left = 2;
        let right = 3;
        while (this.heap[i] > this.heap[left] || this.heap[i] > this.heap[right]) {
            if (this.heap[left] < this.heap[right]) {
                [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
                i = left;
            } else {
                [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
                i = right;
            }
            left = 2 * i;
            right = 2 * i + 1;
            if (this.heap[left] === undefined || this.heap[right] === undefined) break;
        }
    }
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */