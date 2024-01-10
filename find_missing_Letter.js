function fearNotLetter(str) {
  const length = str[0].charCodeAt(0);

  for (let i = str[0].charCodeAt(), j = 0; i < length + str.length; i++, j++) {
    if (i !== str[j].charCodeAt()) return String.fromCharCode(i);
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
