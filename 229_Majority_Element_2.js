var majorityElement = function (nums) {
  const hash = new Map();
  const set = new Set();
  let half = Math.floor(nums.length / 3);
  const result = [];

  for (let el of nums) {
    if (hash.get(el)) hash.set(el, hash.get(el) + 1);
    else hash.set(el, 1);

    if (hash.get(el) > half && !set.has(el)) {
      result.push(el);
      set.add(el);
    }
  }

  return result;
};

majorityElement([3, 2, 3]);
majorityElement([1, 2]);
