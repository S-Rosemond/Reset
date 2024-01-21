// var findLengthOfLCIS = function (nums) {
//   let stack = [];
//   let left = 0;
//   let right = 1;
//   let max = 0;
//   while (left < nums.length) {
//     if (nums[right] === undefined || nums[right] <= nums[left]) {
//       stack.push(nums[left]);
//       max = Math.max(max, stack.length);
//       stack = [];
//     }
//     if (nums[left] < nums[right]) stack.push(nums[left]);

//     left++;
//     right++;
//   }
//   return max;
// };

var findLengthOfLCIS = function (nums) {
  let max = 0;

  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i + 1] <= nums[i] || nums[i + 1] === undefined) {
      let temp = i + 1 - j;
      if (max < temp) max = temp;
      j = i + 1;
    }
  }

  return max;
};

findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]);
findLengthOfLCIS([1]);
findLengthOfLCIS([1, 2, 3]);
findLengthOfLCIS([1, 3, 5, 4, 7]);
findLengthOfLCIS([2, 2, 2, 2, 2]);
