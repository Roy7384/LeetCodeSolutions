# @param {Integer[][]} intervals
# @param {Integer[]} new_interval
# @return {Integer[][]}
def insert(intervals, new_interval)
    return [new_interval] if intervals.empty? 
    result = []
    interval_to_add = new_interval
    
    intervals.each do |interval|
        if interval[1] < new_interval[0] || interval_to_add.nil?
            result.push(interval)
        elsif interval_to_add[0] <= interval[1] && interval_to_add[1] >= interval[0] 
            interval_to_add = [[interval_to_add[0], interval[0]].min, [interval_to_add[1], interval[1]].max]
        else
            result.push(interval_to_add, interval)
            interval_to_add = nil
        end
    end
    result.push(interval_to_add) if interval_to_add
    result
end