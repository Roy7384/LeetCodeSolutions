/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const stack = [];
    
    const dfs = (node) => {
        if (!node) {
            stack.push("n");
            return
        }
        stack.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root); 
    
    return stack.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const arr = data.split(",");
    let pointer = 0;
    
    const dfs = () => {
        if (arr[pointer] === "n") {
            pointer ++;
            return null;
        }
        const node = new TreeNode(arr[pointer]);
        pointer ++;
        node.left = dfs();
        node.right = dfs();
        return node;
    }
    
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */