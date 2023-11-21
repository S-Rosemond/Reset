var addBinary = function (a, b) {
  let carry = 0;
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let loop = Math.max(i, j);

  while (loop >= 0) {
    vAI = a[i] ?? 0;
    vBJ = b[j] ?? 0;

    vAI = Number(vAI);
    vBJ = Number(vBJ);

    if (vAI === 0 && vBJ === 0 && carry === 1)
      (carry = 0), (result = 1 + result);
    else if (vAI === 0 && vBJ === 0) result = 0 + result;
    else if (
      (vAI === 1 && vBJ === 0 && carry === 1) ||
      (vAI === 0 && vBJ === 1 && carry === 1)
    )
      (carry = 1), (result = 0 + result);
    else if (vAI === 1 && vBJ === 1 && carry === 1)
      (carry = 1), (result = 1 + result);
    else if (vAI === 1 && vBJ === 1) (carry = 1), (result = 0 + result);
    else if (
      (vAI === 1 && vBJ === 0 && carry === 0) ||
      (vAI === 0 && vBJ === 1 && carry === 0)
    )
      result = 1 + result;

    j--;
    i--;
    loop--;
  }
  if (carry) result = "" + carry + result;
};

addBinary("1111", "1111"); // 11110
// addBinary("101", "1");
// addBinary("11", "1");
// addBinary("1", "1");
// addBinary(a, b);

const a =
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
const b =
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
var expected =
  "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000";
// console.log(expected.length);
