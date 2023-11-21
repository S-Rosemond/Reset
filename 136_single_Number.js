// solution from https://www.youtube.com/watch?v=kc96KUDeA68
// hard to understand trick;

var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  return xor;
};

singleNumber([1, 2, 1, 2, 4]);
singleNumber([4, 1, 2, 1, 2]);
