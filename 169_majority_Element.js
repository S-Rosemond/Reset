var majorityElement = function (nums) {
  const hash = new Map();
  let max = 0;
  let result;

  for (let el of nums) {
    if (hash.get(el)) hash.set(el, hash.get(el) + 1);
    else hash.set(el, 1);

    if (hash.get(el) > max) result = el;
    max = Math.max(max, hash.get(el));
  }

  return result;
};

majorityElement([3, 2, 3]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);
majorityElement([1, 1, 2, 2, 1, 2, 2]);
