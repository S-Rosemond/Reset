const hashSymbol = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

var romanToInt = function (s) {
  let answer = 0;
  let j;

  for (let i = 0; i < s.length; i++) {
    j = i + 1;
    let test = s[i] + s[j];
    if (hashSymbol[test]) {
      answer += hashSymbol[test];
      i = j;
    } else answer += hashSymbol[s[i]];
  }

  return answer;
};

function testRomanToInt(s) {
  console.log(romanToInt(s));
}

// testRomanToInt("III");
// testRomanToInt("LVIII");
testRomanToInt("MCMXCIV");
