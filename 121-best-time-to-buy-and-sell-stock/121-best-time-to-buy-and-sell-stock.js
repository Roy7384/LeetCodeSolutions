/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let profit = 0;
  
  let buyDay = 0;
  let sellDay = 1;
  
  const totalDays = prices.length;
  
  while (sellDay <= prices.length) {
    const buyPrice = prices[buyDay];
    const sellPrice = prices[sellDay];
    
    if (sellPrice > buyPrice) {
      profit = Math.max(profit, sellPrice - buyPrice)
    } else {
      buyDay = sellDay;
    }
    sellDay ++;
  } 
  
  return profit
};