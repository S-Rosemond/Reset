// after watching Neetcode
var productExceptSelf = function (nums) {
  const newArr = Array(nums.length).fill(1);
  let prefix = 1;
  let postfix = 1;

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    newArr[i] *= prefix;
    prefix *= nums[i];

    newArr[j] *= postfix;
    postfix *= nums[j];
  }

  return newArr;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
console.log(productExceptSelf(nums)); // [24,12,8,6]
