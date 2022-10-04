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
const NULL_NODE = 'N';

var serialize = function(root) {
    if(!root) return '';
    let stack = [];
    
    const dfs = (node) => {
        if(!node) {
            stack.push(NULL_NODE);
            return;
        }
        stack.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return stack.join(',');
};

var deserialize = function(data) {
    if(!data.length) return null;
    let arr = data.split(',');
    let pointer = 0;
    
    const dfs = () => {
        if(arr[pointer] === NULL_NODE) {
            pointer ++;
            return null;
        }
        let node = new TreeNode(arr[pointer]);
        pointer ++;
        node.left = dfs();
        node.right = dfs();
        return node;
    }
    
    return dfs();
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */