var smallerNumbersThanCurrent = function (nums) {
  let [hash, result] = createHashFromSortedArray(nums);

  for (let i = 0; i < nums.length; i++) {
    result[i] = hash.get(nums[i]);
  }

  return result;
};

var createHashFromSortedArray = function (nums) {
  let prev = 0;
  let hash = new Map();

  let a = [...nums];
  a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (i === 0) {
      hash.set(a[i], prev);
      continue;
    }

    if (a[i - 1] < a[i]) {
      prev += 1;
      hash.set(a[i], prev);
    } else prev++;
  }

  return [hash, Array(a.length)];
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
