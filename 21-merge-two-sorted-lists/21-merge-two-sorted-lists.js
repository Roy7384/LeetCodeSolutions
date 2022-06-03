/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
  const dummy = {next: null};
  let prevNode = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prevNode.next = list1;
      prevNode = list1;
      list1 = list1.next;
    } else {
      prevNode.next = list2;
      prevNode = list2;
      list2 = list2.next;
    }
  }

  if (!list1) prevNode.next = list2;
  if (!list2) prevNode.next = list1;

  return dummy.next;
};