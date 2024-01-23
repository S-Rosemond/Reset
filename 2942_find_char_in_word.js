// Regex global flag result wrong answer, brute force solution better;
var findWordsContaining = function (words, x) {
  const regex = new RegExp(x);
  const arr = [];
  for (let i = 0; i < words.length; i++) {
    if (regex.test(words[i])) {
      arr.push(i);
    }
  }

  return arr;
};
const arr = [
  findWordsContaining(["nhd", "zheyegi", "ogz", "fpybmcc", "ntbbwtde"], "g"),
  findWordsContaining(["leet", "code"], "e"),
  findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"),
  findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"),
];

for (let i = 0; i < arr.length; i++) {
  const test = arr[i];
  console.log(test);
}
