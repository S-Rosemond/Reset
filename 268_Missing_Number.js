// var missingNumber = function (nums) {
//   // solution includes sorting
//   nums.sort((a, b) => a - b);

//   let search = -1;

//   for (let i = 0; i < nums.length; i++) {
//     if (search + 1 !== nums[i]) break;
//     else search = nums[i];
//   }
//   return search + 1;
// };

// var missingNumber = function (nums) {
//   nums.sort((a, b) => a - b);
//   console.log(nums);
//   let search = -1;

//   for (let i = 0; i < nums.length; i++) {
//     if (search + 1 !== nums[i]) break;
//     else search++;
//   }

//   return search + 1;
// };

var missingNumber = function (nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
    xor ^= i + 1;
  }

  return xor;
};
missingNumber([3, 0, 1]);
