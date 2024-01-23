var findLHS = function (nums) {
  const hash = mapFrequency(nums);
  let max = 0;

  hash.forEach((value, key) => {
    let temp = value + hash.get(key + 1);
    if (temp > max) max = temp;
  });

  return max;
};

var mapFrequency = function (nums) {
  const hash = new Map();

  for (let el of nums) {
    if (hash.has(el)) hash.set(el, hash.get(el) + 1);
    else hash.set(el, 1);
  }

  return hash;
};

findLHS([1, 3, 2, 2, 5, 2, 3, 7]);
