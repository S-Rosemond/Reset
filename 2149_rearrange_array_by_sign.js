const num = [3, 1, -2, -5, 2, -4];

// can use filter instead
function splitArray(nums) {
  const negatives = [];
  const positives = [];

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    const elSign = Math.sign(el);
    if (elSign === 1 || elSign === 0) positives.push(el);
    else negatives.push(el);
  }

  return [positives, negatives];
}

var rearrangeArray = function (nums) {
  const length = nums.length;
  const [positives, negatives] = splitArray(nums);
  nums = new Array();

  for (let i = 0; i < length / 2; i++) {
    nums.push(positives[i]);
    nums.push(negatives[i]);
  }

  return nums;
};

rearrangeArray(num);
