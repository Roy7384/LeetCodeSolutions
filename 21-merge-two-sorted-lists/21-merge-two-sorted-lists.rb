# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
    p1 = list1
    p2 = list2
    sentinel = ListNode.new 
    prev_node = sentinel
    
    while p1 && p2
        if p1.val <= p2.val
            prev_node.next = p1 
            prev_node = p1
            p1 = p1.next
        else
            prev_node.next = p2 
            prev_node = p2
            p2 = p2.next
        end
    end
    
    p1.nil? ? prev_node.next = p2 : prev_node.next = p1
    
    sentinel.next
        
end