var sortArrayByParity = function (nums) {
  let [left, right] = [0, nums.length - 1];

  while (left < right) {
    if (nums[left] % 2 !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    }
    if (nums[left] % 2 === 0) {
      left++;
    }
  }

  return nums;
};
