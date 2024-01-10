function stringReduce(str) {
  const regex = /[-\s+.A-Z_]/g;

  let accumulator = "";
  const arr = [];

  for (let i = 0; i <= str.length; i++) {
    if (i === 0) {
      accumulator += str[i];
      continue;
    }

    if (regex.test(str[i])) {
      if (isWord(accumulator)) arr.push(accumulator);
      accumulator = "";
      if (isNotLetter(str[i])) continue;
    }

    if (str[i] !== undefined) accumulator += str[i];

    if (i === str.length) {
      if (isWord(accumulator)) arr.push(accumulator);
    }
  }

  return arr;
}

var isWord = function (string) {
  const matchWord = /[a-zA-Z]/g;
  return matchWord.test(string);
};

var isNotLetter = function (string) {
  const matchNonLetter = /[-\s+._]/g;
  return matchNonLetter.test(string);
};

// console.log(stringReduce("thisIsSpinalTap"));
console.log(stringReduce("This Is Spinal Tap"));
