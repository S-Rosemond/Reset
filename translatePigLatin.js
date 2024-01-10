function translatePigLatin(str) {
  const isVowel = vowelSet();
  let consonantCluster = "";
  const ay = "ay";
  const way = "way";
  let startIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      if (isVowel.has(str[i])) {
        return str + way;
      }
    }

    if (isVowel.has(str[i])) {
      startIndex = i;
      consonantCluster += ay;
      break;
    }

    consonantCluster += str[i];
  }

  if (startIndex > 0) {
    const slicedWord = str.slice(startIndex);
    return slicedWord + consonantCluster;
  }

  return str + ay;
}

var vowelSet = function () {
  const set = new Set("aeiou");
  return set;
};

console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
