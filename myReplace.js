function myReplace(str, before, after) {
  const capitalized = isCapitalized(before);
  if (capitalized) after = capitalize(after);
  if (capitalized === false) after = after.toLowerCase();
  return str.replace(before, after);
}

var isCapitalized = (str) => {
  const regex = /[A-Z]/g;
  return regex.test(str[0]);
};

var capitalize = (str) => str.replace(str[0], str[0].toUpperCase());

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
console.log(myReplace("I think we should look up there", "up", "Down"));
