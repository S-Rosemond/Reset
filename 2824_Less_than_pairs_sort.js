var countPairs = function (nums, target) {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }

  return count;
};

countPairs([-1], -2);
countPairs([-1, 1, 2, 3, 1], 2);
countPairs([-6, 2, 5, -2, -7, -1, 3], -2);
