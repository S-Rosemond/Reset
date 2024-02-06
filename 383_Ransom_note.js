function createMap(string) {
  const map = new Map();

  for (let i = 0; i < string.length; i++) {
    if (map.has(string[i])) map.set(string[i], map.get(string[i]) + 1);
    else map.set(string[i], 1);
  }

  return map;
}

var canConstruct = function (ransomNote, magazine) {
  // can preload maps, then loop and verify <= from magazine map
  const ransomMap = createMap(ransomNote);
  const magazineMap = createMap(magazine);

  for (let el of ransomNote) {
    if (
      magazineMap.get(el) === undefined ||
      magazineMap.get(el) < ransomMap.get(el)
    )
      return false;
  }

  return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aab", "aaab"));
console.log(canConstruct("aa", "aab"));
console.log(canConstruct("aa", "ab"));
