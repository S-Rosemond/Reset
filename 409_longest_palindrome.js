function createMap(str) {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }
  return map;
}

var longestPalindrome = function (s) {
  let map = createMap(s);

  function reduceMap() {
    let count = 0;
    let plusOne = false;

    map.forEach((value) => {
      if (value > 1) {
        if (value % 2 === 0) count += value;
        else {
          count += value - 1;
          if (plusOne === false) plusOne = true;
        }
      } else if (plusOne === false) plusOne = true;
    });
    if (plusOne) count++;
    return count;
  }

  let count = reduceMap();

  return count;
};

console.log(longestPalindrome("abcba"));
console.log(longestPalindrome("abccccdd"));
