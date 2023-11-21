var lengthOfLastWord = function (s) {
  const array = s.trim().split(" ");
  const end = array.length - 1;
  return array[end].length;
};

const s = "   fly me   to   the moon  ";

var lastWord = function (s) {
  let trimmedString = s.trim();
  console.log(trimmedString.length);
  console.log(trimmedString.lastIndexOf(" "));
  console.log(trimmedString.lastIndexOf(" ") - 1);

  return trimmedString.length - trimmedString.lastIndexOf(" ") - 1;
};

lastWord(s);
