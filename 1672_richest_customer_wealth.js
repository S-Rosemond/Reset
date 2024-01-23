var maximumWealth = function (accounts) {
  const wealthReduced = accounts.map((el) => {
    return el.reduce((acc, curr) => acc + curr, 0);
  });

  let max = -Infinity;
  for (let i = 0; i < wealthReduced.length; i++) {
    if (wealthReduced[i] > max) max = wealthReduced[i];
  }

  return max;
};

maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);

maximumWealth([
  [1, 5],
  [7, 3],
  [3, 5],
]);

maximumWealth([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]);
