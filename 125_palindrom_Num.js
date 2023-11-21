const numToString = (num) => new String(num);

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

isPalindrome(121);
isPalindrome(10);
isPalindrome(202);

/** This is a two pointer problem, as one moves to the center and not overlapped the values at each pointer should equal */
