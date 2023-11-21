// find simpler solution learning opportunity
var longestCommonPrefix = function (strs) {
  const length = strs.length;
  const [obj, wordCount] = mapArrayToObject(strs);

  return returnCommonPrefix(obj, length, wordCount);
};

var returnCommonPrefix = function (obj, length, wordCount) {
  let answer = "";

  for (let i = 0; i < wordCount; i++) {
    if (obj[i][1] === length) answer += obj[i][0];
    else break;
  }

  return answer;
};

var mapArrayToObject = function (array) {
  let obj = {};
  let maxWordCount = 0;

  while (array.length) {
    let str = array.pop();
    maxWordCount = Math.max(str.length, maxWordCount);

    obj = hashString(str, obj);
  }

  return [obj, maxWordCount];
};

var hashString = function (str, obj) {
  for (let i = 0; i < str.length; i++) {
    if (obj[i] && obj[i][0] === str[i]) obj[i][1]++;
    else obj[i] = [str[i], 1];
  }

  return obj;
};

// const test = { f: 3, l: 3, o: 2 };

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
