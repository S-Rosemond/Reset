// Solved without seeing solution; hope I don't forget prefix sum
var maxSubArray = function (nums) {
  const newArr = Array(nums.length).fill(0);
  let prefix = 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    newArr[i] += Math.max(prefix + nums[i], nums[i]);
    max = Math.max(max, newArr[i]);

    prefix = Math.max(prefix + nums[i], nums[i]);
  }
  return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

maxSubArray(nums);
