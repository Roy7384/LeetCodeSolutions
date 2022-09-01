# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def middle_node(head)
    slow_p = head
    fast_p = head.next
    
    while fast_p 
        slow_p = slow_p.next
        fast_p = fast_p.next.nil? ? nil : fast_p.next.next
    end
    
    slow_p
end