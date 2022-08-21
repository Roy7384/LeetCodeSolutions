# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {Boolean}
def hasCycle(head)
    return false unless head 
    slow_pointer = head
    return false unless head.next
    fast_pointer = head.next
    
    while fast_pointer && fast_pointer.next
        return true if slow_pointer == fast_pointer
        
        slow_pointer = slow_pointer.next
        fast_pointer = fast_pointer.next.next 
    end
    
    false
end