function palindrome(str) {
  const regex = /[\\_\/)=:(.\s+|,-]/g;
  const replacedStr = str.replace(regex, "");
  const newString = replacedStr.split("").join("");
  const reversedString = replacedStr.split("").reverse().join("");

  return newString.toLowerCase() === reversedString.toLowerCase();
}

console.log(palindrome("race car"));
console.log(palindrome("0_0 (: /- :) 0-0"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("eye"));
console.log(palindrome("eye_"));
