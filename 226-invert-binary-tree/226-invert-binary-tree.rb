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
# @return {TreeNode}
def invert_tree(root)
    return root unless root
    
    temp_node = root.left
    root.left = root.right
    root.right = temp_node
    
    invert_tree(root.left) if root.left
    invert_tree(root.right) if root.right
    
    root
end