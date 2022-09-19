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
    const lookup = {};
    
    let pointer = headA;
    
    while (pointer) {
        if (!(pointer.val in lookup)) lookup[pointer.val] = []; 
        lookup[pointer.val].push(pointer);
        pointer = pointer.next
    }
    
    pointer = headB;
    
    while(pointer) {
        if (pointer.val in lookup && pointer === lookup[pointer.val].shift()) return pointer 
        pointer = pointer.next;
    }
    
    return null;
};