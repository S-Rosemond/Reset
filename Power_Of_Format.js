var isPowerOfAny = function (n) {
  const ANY_NUM = "num > 1";

  if (n === 1) return true;
  if (n <= 0) return false;
  if (n % ANY_NUM !== 0) return false;

  return isPowerOfAny(n / ANY_NUM);
};
