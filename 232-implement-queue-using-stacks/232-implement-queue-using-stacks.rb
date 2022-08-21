class MyQueue
    def initialize()
        @push_stack = []
        @pop_stack = []
    end


=begin
    :type x: Integer
    :rtype: Void
=end
    def push(x)
       @push_stack.push(x) 
    end


=begin
    :rtype: Integer
=end
    def pop()
        if @pop_stack.length.zero?
            @pop_stack = @push_stack.reverse() 
            @push_stack = []
        end
        @pop_stack.pop
    end


=begin
    :rtype: Integer
=end
    def peek()
       if @pop_stack.length.zero?
           @push_stack[0]
       else
           @pop_stack[-1]
       end
    end


=begin
    :rtype: Boolean
=end
    def empty()
       @push_stack.length.zero? && @pop_stack.length.zero? 
    end


end

# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue.new()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()