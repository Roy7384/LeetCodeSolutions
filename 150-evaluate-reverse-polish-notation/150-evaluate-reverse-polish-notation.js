/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operators = {
        "+": function (x, y) {return x + y},
        "-": function (x, y) {return x - y},
        "*": function (x, y) {return x * y},
        "/": function (x, y) {return Math.trunc(x / y)},
    }
    const tempStack = [];
    for (let element of tokens) {
        if (element in operators) {
            const x = Number(tempStack.pop());
            const y = Number(tempStack.pop());
            const result = operators[element](y, x);
            tempStack.push(result);
        } else {
            tempStack.push(element);
        }
    }
    return tempStack[0];
};