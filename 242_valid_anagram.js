const createObjCount = (str) => {
  let obj = {};

  for (const element of str) {
    if (obj[element]) obj[element]++;
    else obj[element] = 1;
  }
  return obj;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const [s1, t1] = [createObjCount(s), createObjCount(t)];

  for (const element of s) {
    if (t1[element] !== s1[element]) return false;
  }
  return true;
};

function testIsAnagram(s, t) {
  console.log(isAnagram(s, t));
  return isAnagram(s, t);
}

testIsAnagram("anagram", "nagaram");
testIsAnagram("rat", "car");

/** This is a frequency problem the values will share the same frequency | count when mapped out if they do not it is not an anagram */
