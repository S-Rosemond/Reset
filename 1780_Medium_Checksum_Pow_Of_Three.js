function findMinPowThree(n) {
  let pow = 0;

  while (Math.pow(3, pow) <= n) {
    pow++;
  }

  return pow - 1;
}

var checkPowersOfThree = function (n) {
  const set = new Set();
  while (n > 0) {
    let pow = findMinPowThree(n);
    if (set.has(pow)) return false;
    set.add(pow);
    n -= Math.pow(3, pow);
  }

  return n === 0;
};
