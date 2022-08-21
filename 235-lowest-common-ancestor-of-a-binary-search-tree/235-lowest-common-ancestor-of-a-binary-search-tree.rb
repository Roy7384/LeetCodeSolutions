# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @param {TreeNode} p
# @param {TreeNode} q
# @return {TreeNode}
def lowest_common_ancestor(root, p, q)
    p_val = p.val
    q_val = q.val
    root_val = root.val
   return root if (p_val - root_val) *  (q_val - root_val) <= 0
    
   if q_val < root_val
       lowest_common_ancestor(root.left, p, q)
   else 
       lowest_common_ancestor(root.right, p, q)
   end
end