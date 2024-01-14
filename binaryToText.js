function binaryToText(str) {
  const newString = str.split(" ").map((el) => parseInt(el, 2));

  return String.fromCharCode(...newString);
}

// Example:
const test =
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";
const arr = [];

const test2 = test.split(" ").map((el) => parseInt(el, 2));

console.log(test2);
console.log(String.fromCharCode(...test2));
