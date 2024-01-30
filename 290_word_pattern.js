var wordPattern = function (pattern, s) {
  // split the string into individual words[]
  const splitString = s.split(/\s/);
  // create a map to match words[i] to pattern
  const map = new Map();
  const set = new Set();

  if (splitString.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    let patternChar = pattern[i];
    let stringPair = splitString[i];
    if (!map.has(patternChar) && !set.has(stringPair)) {
      [map.set(patternChar, stringPair), set.add(stringPair)];
    } else if (map.get(patternChar) !== stringPair || stringPair === undefined)
      return false;
  }

  return true;
};

wordPattern("jquery", "jquery");
wordPattern("jquery", "jquery");
wordPattern("abba", "dog cat cat fish");
wordPattern("abba", "dog cat cat fish");
wordPattern("abc", "b c a");
wordPattern("abba", "dog dog dog dog");
wordPattern("abba", "dog cat cat dog");
