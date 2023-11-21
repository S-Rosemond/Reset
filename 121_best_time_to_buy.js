var maxProfit = function (prices) {
  let max = 0;
  let min = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (max > 0) {
      let temp = max - min;
      if (temp > maxProfit) maxProfit = temp;
    }

    if (prices[i] < min) {
      min = prices[i];
      if (max > 0) max = 0;
      continue;
    }

    if (prices[i] > max) max = Math.max(max, prices[i]);
  }

  return max - min > maxProfit ? max - min : maxProfit;
};

let prices0 = [2, 4, 1];
let prices1 = [7, 1, 0, 5, 3, 6, 4];
let prices2 = [7, 1, 5, 3, 6, 4];
let prices3 = [7, 6, 4, 3, 1];

maxProfit([2, 11, 1, 4, 7]);
maxProfit(prices0);
maxProfit(prices2);
maxProfit(prices3);
