# @param {Integer[][]} intervals
# @param {Integer[]} new_interval
# @return {Integer[][]}
def insert(intervals, new_interval)
    
    result = []
    interval_to_add = new_interval
    
    intervals.each do |interval|
        left, right = interval 
        if interval_to_add.nil? || right < interval_to_add[0] 
            result.push(interval)
        elsif interval_to_add[0] <= right && interval_to_add[1] >= left
            interval_to_add = [[interval_to_add[0], left].min, [interval_to_add[1], right].max]
        else
            result.push(interval_to_add, interval)
            interval_to_add = nil
        end
    end

    result.push(interval_to_add) if interval_to_add
    result
end