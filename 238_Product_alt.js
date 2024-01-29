// 111ms works
function createWindow(nums, start, limit) {
  let output = 1;
  for (let i = start; i < limit; i++) {
    output *= nums[i];
  }
  return output;
}

var productExceptSelf = function (nums) {
  const newArr = [];
  let window = null;
  let backWindow = 1;

  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] === 0 && i > 0) {
      window = createWindow(nums, i + 1, nums.length);
      backWindow = createWindow(nums, j, i);
      newArr.push(window * backWindow);
      continue;
    }

    switch (i) {
      case 0:
        window = createWindow(nums, i + 1, nums.length);
        if (window === -0) newArr.push(0);
        else newArr.push(window);
        break;
      case nums.length - 1:
        backWindow *= nums[i - 1];
        newArr.push(backWindow);
        break;
      default:
        backWindow *= nums[i - 1];
        window /= nums[i];
        newArr.push(backWindow * window);
        break;
    }
  }
  return newArr;
};

const nums = [1, 2, 3, 4];

console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
console.log(productExceptSelf(nums)); // [24,12,8,6]
