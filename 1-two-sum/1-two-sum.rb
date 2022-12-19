 def two_sum(nums, target)
      diff_lookup = {}
   
    nums.each_with_index do |num, i|
        diff = target - num
       if diff_lookup[diff].nil?
         diff_lookup[num] = i
       else
         return [diff_lookup[diff], i]
         # testing out codespace 
       end
     end
   end