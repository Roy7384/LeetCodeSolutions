# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums) 
    num_lookup = {}
    
    threshold = nums.length / 2
    return nums[0] if threshold == 0
    
    nums.each do |num|
        lookup_result = num_lookup[num]
        
        if lookup_result.nil?
            num_lookup[num] = 1
        else
            lookup_result += 1
                
            return num if lookup_result > threshold
            
            num_lookup[num] = lookup_result
        end
    end
    
end