const alphabet = [
  "undefined",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// console.log(alphabet[13]); // n
// console.log(alphabet.length); // n

function cipherShift13(arr) {
  const newArr = [];

  for (let i = 1; i <= 13; i++) {
    newArr.push([arr[i], arr[i + 13]]);
  }

  for (let i = 14; i <= 26; i++) {
    newArr.push([arr[i], arr[i - 13]]);
  }
  console.log(newArr);
  return newArr;
}

mapABC13(alphabet);
