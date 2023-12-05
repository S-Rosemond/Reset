var findWords = function (words) {
  const [top, middle, bottom] = mapKeySet();
  let row = null;
  let temp = null;
  let result = [];

  while (words.length) {
    temp = words.pop();
    let pass = true;

    if (top.has(temp[0])) row = top;
    else if (middle.has(temp[0])) row = middle;
    else row = bottom;

    for (let i = 0; i < temp.length; i++) {
      if (!row.has(temp[i])) pass = false;

      if (i === temp.length - 1 && pass) {
        result.push(temp);
      }
    }
  }
  return result;
};

// trick from ods967 LEETCODE
var mapKeySet = function () {
  const TOP = new Set("qwertyuiop" + "qwertyuiop".toUpperCase());
  const MIDDLE = new Set("asdfghjkl" + "asdfghjkl".toUpperCase());
  const BOTTOM = new Set("zxcvbnm" + "zxcvbnm".toUpperCase());

  return [TOP, MIDDLE, BOTTOM];
};

findWords(["Hello", "Alaska", "Dad", "Peace"]);
