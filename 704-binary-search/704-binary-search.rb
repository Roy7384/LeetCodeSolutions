# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    left = 0
    right = nums.length - 1
    
    while left <= right
        mid = (left + right) / 2
        
        if nums[mid] > target
            right = mid - 1
        elsif nums[mid] < target
            left = mid + 1
        else
            return mid
        end
    end
    
    -1
end