var isPalindrome = function (x) {
  xStr = numToString(x);
  let [left, right] = [0, xStr.length - 1];

  while (left < right) {
    if (xStr[left] !== xStr[right]) return false;
    left++;
    right--;
  }
  return true;
};

var numToString = (num) => new String(num);
