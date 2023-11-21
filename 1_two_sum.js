var twoSum = function (nums, target) {
  let a = 1;

  for (let i = 0; i <= nums.length; a++) {
    if (nums[i] + nums[a] === target) return [i, a];

    if (a === nums.length - 1) {
      i++;
      a = i;
    }
  }
  return null;
};

function twoSumTest(nums, target) {
  console.log(twoSum(nums, target));
  return twoSum(nums, target);
}

twoSumTest([2, 7, 11, 15], 9);
twoSumTest([3, 2, 4], 6);
