var searchInsert = function (nums, target) {
  let mid = Math.floor(nums.length / 2);
  let next;

  while (mid > -1 || mid < nums.length) {
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      next = nums[mid - 1];

      if (next === undefined) return mid;

      if (target <= next) mid--;
      else return mid;
    }

    if (nums[mid] < target) {
      next = nums[mid + 1];

      if (next === undefined || target < next) return mid + 1;

      if (target >= next) mid++;
      else return mid;
    }
  }
};

const input = [[1, 3, 5, 6], 2];
const input2 = [[1, 2, 4, 5, 6, 7], 3];

// searchInsert(input[0], input[1]);
// searchInsert(input2[0], input2[1]);
// searchInsert([1, 3, 5, 6], 7);
// searchInsert([1, 3, 5, 6], 0);
// searchInsert([1, 3], 1);
// searchInsert([1, 3, 4], 4);
searchInsert([1, 3, 5], 4);
