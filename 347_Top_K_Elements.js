// Not the best solution O(n log n); must come back when data structure stronger!
var topKFrquent = function (nums, k) {
  let hash = countFrequency(nums);
  const sorted = [];
  const result = [];
  hash.forEach((value, key) => sorted.push([value, key]));
  sorted.sort((a, b) => a[0] - b[0]);

  for (let i = 0, j = sorted.length - 1; i < k; i++, j--) {
    result.push(sorted[j][1]);
  }

  return result;
};

var countFrequency = function (nums) {
  const hash = new Map();

  for (let el of nums) {
    if (hash.has(el)) hash.set(el, hash.get(el) + 1);
    else hash.set(el, 1);
  }

  return hash;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

topKFrquent(nums, k);

// maybe hash map count frequency then create array
