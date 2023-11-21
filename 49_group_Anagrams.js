var groupAnagrams = function (strs) {
  //  Can't believe I didn't see it. updated solution with map
  const map = new Map();
  for (const s of strs) {
    const key = getKey(s);
    if (map.get(key)) {
      map.get(key).push(s);
    } else {
      map.set(key, [s]);
    }
  }
  console.log([...map.values()]);
  return [...map.values()];
};

const getKey = (s) => {
  return s.split("").sort().join("");
};
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(strs);
