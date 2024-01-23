// non optimal three sum
var threeSum = function (nums) {
  const arr = [];
  nums.sort((a, b) => a - b);
  let i = 0;

  while (i < nums.length) {
    let target = 0 - nums[i];
    let j = i + 1;
    let k = nums.length - 1;

    if (nums[i] >= 1) break;

    while (j < k) {
      let sum = nums[j] + nums[k];
      if (sum > target) {
        k--;
      } else if (sum < target) {
        j++;
      } else {
        if (nums[i] !== nums[i - 1]) {
          arr.push([nums[i], nums[j], nums[k]]);
        }
        k--;
        while (nums[k + 1] === nums[k]) {
          k--;
        }
        j++;
        while (nums[i - 1] === nums[i]) {
          j++;
        }
      }
    }
    i++;
  }

  return arr;
};

threeSum([-3, -4, -2, 0, 2, 2, -2, 1, -1, 2, 3, -1, -5, -4, -5, 1]);
threeSum([-2, 0, 0, 2, 2]);
threeSum([-2, -1, 0, 0, 1, 2, 2]);
threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
threeSum([-1, 0, 1, 2, -1, -4]);
