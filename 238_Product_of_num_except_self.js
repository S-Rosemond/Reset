// not optimized  should work but will exceed limit

function createWindow(nums, start, limit) {
  let output = 1;
  for (let i = start; i < limit; i++) {
    output *= nums[i];
  }
  return output;
}

var productExceptSelf = function (nums) {
  let j = -1;
  const newArr = [];
  let window = null;
  let backWindow = null;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      window = createWindow(nums, i + 1, nums.length);
      if (window === -0) newArr.push(0);
      else newArr.push(window);
      j = 0;
      continue;
    }
    if (i === nums.length - 1) {
      backWindow = createWindow(nums, j, i);
      newArr.push(backWindow);
      continue;
    }
    if (i > 0) {
      window = createWindow(nums, i + 1, nums.length);
      backWindow = createWindow(nums, j, i);

      let temp = window * backWindow;
      newArr.push(temp);
    }
  }
  return newArr;
};

const nums = [1, 2, 3, 4];

console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
console.log(productExceptSelf(nums)); // [24,12,8,6]
