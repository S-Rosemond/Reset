var moveZeroes = function (nums) {
  // bad solution count zeroes, move all to new arr or swap when zero found; two solutions
  // swap less space, due l8ter today
  const swap = function (i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };
  let i = 0;
  let j = i + 1;

  while (i < nums.length) {
    if (nums[i] === 0 && nums[j] === 0) {
      j++;
      continue;
    }

    if (nums[i] === 0 && nums[j] !== 0 && j < nums.length) {
      swap(i, j);
      continue;
    }

    i++;
    j++;

    if (nums[j] === undefined) break;
  }

  return nums;
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, 1]);
moveZeroes([1, 2, 0, 3]);
moveZeroes([0]);
