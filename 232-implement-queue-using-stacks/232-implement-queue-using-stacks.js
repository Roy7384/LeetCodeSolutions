class MyQueue {
  constructor() {
    this.popStack = [];
    this.pushStack = [];
  }
  
  push(x) {
    this.pushStack.push(x);
  }

  pop() {
    if (!this.popStack.length) {
      this.popStack = this.pushStack.reverse();
      this.pushStack = [];
    }
    return this.popStack.pop();
  }
  
  peek() {
    if (!this.popStack.length) {
      return this.pushStack[0];
    }
    return this.popStack[this.popStack.length - 1];
  }
  
  empty() {
    return !(this.popStack.length || this.pushStack.length);
  }
}
