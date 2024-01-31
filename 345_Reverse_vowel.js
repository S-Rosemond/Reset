var reverseVowels = function (s) {
  if (s.length <= 1) return s;
  s = s.split("");

  const vowels = new Set("aeiouAEIOU");

  let [left, right] = [0, s.length - 1];
  let pair = 0;
  let foundRightPair = false;
  let foundLeftPair = false;

  function swap(left, right) {
    if (s[left] === s[right]) return;

    [s[left], s[right]] = [s[right], s[left]];
  }

  while (left < right) {
    if (!vowels.has(s[right])) right--;
    else if (foundRightPair === false) {
      pair++;
      foundRightPair = true;
    }

    if (!vowels.has(s[left])) left++;
    else if (foundLeftPair === false) {
      pair++;
      foundLeftPair = true;
    }

    if (pair === 2) {
      swap(left, right);
      foundRightPair = false;
      foundLeftPair = false;
      pair = 0;
      left++;
      right--;
    }
  }

  return s.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("hello world"));
