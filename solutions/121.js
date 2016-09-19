/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var maxes = [];
  var max = 0;

  for (var i = prices.length; i >= 0; i--) {
    maxes.push(-1);
  }

  for (i = prices.length - 1; i >= 0; i--) {
    maxes[i] = prices[i] > (maxes[i + 1]) ? prices[i] : maxes[i + 1];
  }

  for (i = 0; i < prices.length; i++) {
    max = Math.max(maxes[i + 1] - prices[i], max);
  }

  return max;
};
