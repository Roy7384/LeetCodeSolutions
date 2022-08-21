# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
    sum_at_left = 0
    max_sum = nums[0]
    
    nums.each do |num|
        sum_at_left = 0 if sum_at_left < 0
        sum_at_left += num
        max_sum = [sum_at_left, max_sum].max
    end
    
    max_sum
end