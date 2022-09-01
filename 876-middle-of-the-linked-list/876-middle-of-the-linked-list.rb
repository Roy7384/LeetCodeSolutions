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
    fast_p = head.next
    slow_p = head
    
    while fast_p 
        if fast_p.next.nil?
            fast_p = nil
        else
            fast_p = fast_p.next.next
        end
        slow_p = slow_p.next
    end
    
    slow_p
end