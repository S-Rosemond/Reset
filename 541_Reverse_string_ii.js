// debugged solution, Youtube videos make no sense. 98.11%
var reverseStr = function (s, k) {
  // given k, start right || j at k - 1
  if (k < 2) return s;
  let splitString = s.split("");
  const kMove = k;
  let i = 0;
  let j = k - 1;
  let skip = false;

  function reverseString(i, j) {
    while (i < j) {
      [splitString[i], splitString[j]] = [splitString[j], splitString[i]];
      i++;
      j--;
    }
  }

  while (i <= splitString.length) {
    if (splitString[j] === undefined && skip === false) {
      j = splitString[j] ?? splitString.length - 1;

      reverseString(i, j);
    } else if (splitString[i] && splitString[j] && skip === false) {
      reverseString(i, j);
    }
    // potential break after assigning i if (splitString) array[i] == undefined
    i = k;
    k += kMove;
    j = k - 1;

    if (skip === false) {
      skip = true;
      continue;
    }
    skip = false;
  }

  //   splitString = splitString.join("");
  //   console.log(arguments[0], splitString);
  //   return splitString;
  return splitString.join("");
};

console.log(reverseStr("abcdefg", 8, "gfedcba"));
console.log(reverseStr("abcdefg", 4, "dcbaefg"));
console.log(reverseStr("abcdefhij", 3, "cbadefjih"));
console.log(reverseStr("abcdefg", 3, "cbadefg"));
console.log(reverseStr("abcdefg", 2, "bacdfeg"));
