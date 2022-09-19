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
    
    while (pointer1 !== pointer2) {
        pointer1 = pointer1 ? pointer1.next : headB;
        pointer2 = pointer2 ? pointer2.next : headA;
    }
    
    return pointer1;
};