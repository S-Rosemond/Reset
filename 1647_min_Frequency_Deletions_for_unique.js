function mapFrequency(string) {
  const map = new Map();
  for (let char of string) {
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }

  return map;
}

function performDeletions(array) {
  // did not want to reset due to time complexity
  let lookBack = -1;
  let current = 0;
  let peek = 1;
  let ans = 0;
  while (current < array.length) {
    if (peek !== undefined && array[peek] === array[current]) {
      array[current] -= 1;
      ans++;
      continue;
    }
    if (
      array[lookBack] !== undefined &&
      array[lookBack] > 0 &&
      array[lookBack] === array[current]
    ) {
      array[lookBack] -= 1;
      ans++;
      lookBack--;
      current--;
      peek--;
      continue;
    }

    lookBack++;
    current++;
    peek++;
  }

  return ans;
}

var minDeletions = function (s) {
  const freqMap = mapFrequency(s);
  const freqArr = [...freqMap.values()].sort((a, b) => a - b);
  const ans = performDeletions(freqArr);

  return ans;
};

console.log(
  minDeletions(
    "abcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwz"
  )
);

console.log(minDeletions("bbcebab")); // 2
console.log(minDeletions("ab")); // 1
console.log(minDeletions("aab"));
console.log(minDeletions("aaabbbcc"));
console.log(minDeletions("ceabaacb"));
