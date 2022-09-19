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
    let pointer1 = headA;
    let pointer2 = headB;
    
    while (pointer1 || pointer2) {
        if (pointer1 === pointer2) return pointer1;
        
        if (pointer1 === null) {
            pointer1 = headB;
            pointer2 = pointer2.next
        } else if (pointer2 === null) {
            pointer2 = headA;
            pointer1 = pointer1.next
        } else {
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        }
    }
    
    return null;
    
};