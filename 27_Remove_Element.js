var altRemoveElement = function (nums, val) {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    if (nums[right] === val) {
      right = right - 1;
      nums.pop();
    }
    if (nums[left] === val) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      nums.pop();
      right--;
    }
    left++;
  }
  console.log(nums);
  return nums.length;
};

var removeElement = function (nums, val) {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    if (nums[left] === val) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
      nums.pop();
      continue;
    }
    left++;
  }
  console.log(nums);
  return nums.length;
};

// altRemoveElement([1], 1);
// removeElement([3, 2, 2, 3], 3);
// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
// removeElement([2, 1, 2, 2, 3, 0, 4, 2], 2);

removeElement([1], 1);
