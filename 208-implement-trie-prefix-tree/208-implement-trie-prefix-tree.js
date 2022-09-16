
var Trie = function() {
    this.root = new TrieNode();
    
};

class TrieNode {
    constructor (char) {
        this.char = char;
        this.children = {};
        this.terminal = false;
    }
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currentNode = this.root;    
    for (const char of word) {
        const charInNode = currentNode.children[char]; 
        if (charInNode) {
            currentNode = charInNode;
        } else {
            const newNode = new TrieNode(char);
            currentNode.children[char] = newNode;
            currentNode = newNode;
        }  
    } 
    currentNode.terminal = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currentNode = this.root;
    for (const char of word) {
        const charInNode = currentNode.children[char];
        if (!charInNode) return false
        currentNode = charInNode;
    }
    return currentNode.terminal; 
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.root;
    for (const char of prefix) {
        const charInNode = currentNode.children[char];
        if (!charInNode) return false
        currentNode = charInNode;
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */