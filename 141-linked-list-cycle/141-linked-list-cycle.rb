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
    visited = []
    
    pointer = head
    while pointer
        return true if visited.include?(pointer)
        visited.push(pointer)
        pointer = pointer.next
    end
    
    false
end