var findTheDifference = function (s, t) {
  let xor = 0;

  for (let i = 0; i < t.length; i++) {
    if (i < t.length - 1) xor ^= s[i].charCodeAt(0);
    xor ^= t[i].charCodeAt(0);
  }

  console.log(String.fromCharCode(xor));
  return String.fromCharCode(xor);
};

findTheDifference("abcd", "abcde");
