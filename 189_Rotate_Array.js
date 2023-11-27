// NEETCODE Python to Javascript solution
var rotateArray = function (nums, k) {
  nums.reverse();

  function swap(l, r) {
    while (l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++, r--;
    }
  }
  k = k % nums.length;
  swap(0, k - 1);
  swap(k, nums.length - 1);

  return nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

rotateArray(nums, k);
rotateArray([-1, -100, 3, 99], 2);
