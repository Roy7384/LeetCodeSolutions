# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Boolean}
def is_balanced(root)
    return is_balanced_helper(root)[0]
end

def is_balanced_helper(node)
    return [true, 0] unless node
    
    right_balanced, right_max_depth = is_balanced_helper(node.right)
    left_balanced, left_max_depth = is_balanced_helper(node.left)
    
    balanced = left_balanced && right_balanced 
    return [false, 0] unless balanced
    
    balanced = (left_max_depth - right_max_depth).abs <= 1
    return [false, 0] unless balanced
    
    max_depth = [left_max_depth, right_max_depth].max + 1
    
    return [true, max_depth]
end
    