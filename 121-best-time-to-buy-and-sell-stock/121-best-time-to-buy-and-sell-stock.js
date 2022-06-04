/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  
  let buyDay = 0;
  let sellDay = 1;
  
  const totalDays = prices.length;
  
  while (sellDay <= prices.length) {
    if (prices[sellDay] > prices[buyDay]) {
      profit = Math.max(profit, prices[sellDay] - prices[buyDay])
    } else {
      buyDay = sellDay;
    }
    sellDay ++;
  } 
  
  return profit
};