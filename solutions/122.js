/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var i = 0;
    var j = 1;
    var profit = 0;
    var isUp = false;

    while (j < prices.length) {
        if (prices[j] >= prices[j - 1]) {
            isUp = true;

            if (j === prices.length - 1) {
                profit += prices[j] - prices[i];
            }
        } else {
            if (isUp) {
                profit += prices[j - 1] - prices[i];
                isUp = false;
            }

            i = j;
        }

        j++;
    }

    return profit;
};
