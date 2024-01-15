function createRomanNumMap() {
  const numToRomanMap = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  const map = new Map(numToRomanMap);
  return map;
}

function convertString(num, map, result) {
  if (num === 0) return result;

  if (map.has(num)) {
    result += map.get(num);
    num = num - num;
  }
  // can revise to use map instead of +=
  if (num > 1000) {
    result += "M";
    num = num - 1000;
  }
  if (num > 900 && num < 1000) {
    result += "CM";
    num = num - 900;
  }
  if (num > 500 && num < 900) {
    result += "D";
    num = num - 500;
  }
  if (num > 400 && num < 500) {
    result += "CD";
    num = num - 100;
  }
  if (num > 100 && num < 400) {
    result += "C";
    num = num - 100;
  }
  if (num > 90 && num < 100) {
    result += "XC";
    num = num - 90;
  }
  if (num > 50 && num < 90) {
    result += "L";
    num = num - 50;
  }
  if (num > 40 && num < 50) {
    result += "XL";
    num = num - 40;
  }
  if (num > 10 && num < 40) {
    result += "X";
    num = num - 10;
  }
  if (num > 5 && num < 9) {
    result += "V";
    num = num - 5;
  }

  if (num < 4 && num > 0) {
    result += "I";
    num--;
  }

  return convertString(num, map, result);
}

function convertToRoman(num) {
  const map = createRomanNumMap();
  if (map.has(num)) return map.get(num);
  const result = "";

  const answer = convertString(num, map, result);

  return answer;
}

// console.log(convertToRoman(2));
// console.log(convertToRoman(3));
// console.log(convertToRoman(4));
// console.log(convertToRoman(5));
// console.log(convertToRoman(9));
// console.log(convertToRoman(12));
// console.log(convertToRoman(16));
// console.log(convertToRoman(29));
// console.log(convertToRoman(44));
// console.log(convertToRoman(68));
// console.log(convertToRoman(83));
// console.log(convertToRoman(97));
// console.log(convertToRoman(99));
// console.log(convertToRoman(400));
// console.log(convertToRoman(500));
// console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
// passed all test
