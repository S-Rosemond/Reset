function createMap(s) {
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (obj[char]) obj[char]++;
    else obj[char] = 1;
  }

  return obj;
}

var firstUniqChar = function (s) {
  const obj = createMap(s);

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (obj[char] === 1) return i;
  }
  return -1;
};

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
