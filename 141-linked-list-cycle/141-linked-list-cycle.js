/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    let cur = head;
 
    while (cur) {
        if (cur.visited) {
            return true;
        }      
        cur.visited = true;
        cur = cur.next
    }
    return false;
};