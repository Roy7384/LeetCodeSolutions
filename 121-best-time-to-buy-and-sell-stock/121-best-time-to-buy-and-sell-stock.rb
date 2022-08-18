# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    max_p = 0
    buy = 0
    sell = 1
    
    while sell < prices.length
        potential_p = prices[sell] - prices[buy]
        
        if potential_p <= 0
            buy = sell
        else
            max_p = potential_p if potential_p > max_p
        end
        sell += 1
    end
    
    max_p
end