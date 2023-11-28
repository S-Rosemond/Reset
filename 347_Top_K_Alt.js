var topKFrquent = function (nums, k) {
  const hash = countFrequency(nums);
  const frequency = Array(nums.length + 1)
    .fill()
    .map((el) => []);

  hash.forEach((value, key) => {
    frequency[value].push(key);
  });

  let result = [];
  let j = nums.length;

  while (k) {
    if (frequency[j].length > 0) {
      if (frequency[j].length > 1) {
        result.push(frequency[j]);
        result = result.flat();
        k -= frequency[j].length;
      } else {
        result.push(frequency[j][0]);
        k--;
      }
    }
    j--;
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
topKFrquent([1, 1, 1, 2, 2, 2, 3], k);
