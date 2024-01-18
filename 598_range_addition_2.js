var maxCount = function (m, n, ops) {
  let minM = m;
  let minN = n;
  for (let el of ops) {
    minM = Math.min(el[0], minM);
    minN = Math.min(el[1], minN);
  }
  return minM * minN;
};
maxCount(3, 3, []);

maxCount(3, 3, [
  [2, 2],
  [3, 3],
]);

maxCount(3, 3, [
  [2, 2],
  [3, 3],
  [3, 3],
  [3, 3],
  [2, 2],
  [3, 3],
  [3, 3],
  [3, 3],
  [2, 2],
  [3, 3],
  [3, 3],
  [3, 3],
]);
