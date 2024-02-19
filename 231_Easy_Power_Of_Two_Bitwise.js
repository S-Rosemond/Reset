var isPowerOfTwo = function (n) {
  // AlgoJS after learning new trick.
  return n <= 0 ? false : (n & (n - 1)) === 0;
};
