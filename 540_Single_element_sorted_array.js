var singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];

  let mid = null;
  let left = 0;
  let right = nums.length - 1;

  let nearLeft;
  let nearRight;
  let current;
  let leftSize;

  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    nearLeft = nums[mid - 1] ? nums[mid - 1] : nums[0];
    nearRight = nums[mid + 1] ? nums[mid + 1] : nums[nums.length - 1];
    current = nums[mid];

    if (nums[mid - 1] === undefined && nums[mid] !== nums[mid + 1])
      return current;
    if (nearLeft !== current && nearRight !== current) return current;

    leftSize = nearLeft === current ? mid - 1 : mid;
    let isOdd = Boolean(leftSize % 2 === 1);
    if (isOdd) right = mid - 1;
    else left = mid + 1;
  }

  return nums[left];
};

const nums2 = [1, 1, 2, 2, 3, 3, 4, 4, 8, 8, 9];
const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];

singleNonDuplicate([1, 2, 2, 3, 3]);
singleNonDuplicate([7, 7, 10, 11, 11, 12, 12]);
singleNonDuplicate([0, 1, 1, 2, 2, 5, 5]);
singleNonDuplicate(nums);
singleNonDuplicate(nums2);
singleNonDuplicate([2]);
singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]);
