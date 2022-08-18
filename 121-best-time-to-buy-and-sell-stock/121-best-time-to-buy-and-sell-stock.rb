# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    max_p = 0
    buy = 0
    sell = 1
    
    while sell < prices.length
        if prices[buy] >= prices[sell]
            buy = sell
        else
            max_p = [max_p, prices[sell] - prices[buy]].max
        end
        sell += 1
    end
    
    max_p
end