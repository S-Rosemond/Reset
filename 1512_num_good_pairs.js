function mapPairs(num) {
  const map = new Map();
  let result = 0;

  for (let el of num) {
    if (map.has(el)) {
      result += map.get(el);
      map.set(el, map.get(el) + 1);
    } else map.set(el, 1);
  }

  return [result, map];
}

var numIdenticalPairs = function (nums) {
  const [ans, map] = mapPairs(nums);
  return ans;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 2, 3]));
