/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const exist = new Set();
    
    let pointer = headA;
    
    while (pointer) {
        exist.add(pointer)
        pointer = pointer.next
    }
    
    pointer = headB;
    
    while(pointer) {
        if (exist.has(pointer)) return pointer
        pointer = pointer.next;
    }
    
    return null;
};