var NumArray = function (nums) {
  this.nums = nums;
  this.prefix = [];
  let current = 0;
  for (let el of nums) {
    current += el;
    this.prefix.push(current);
  }
};

NumArray.prototype.sumRange = function (left, right) {
  let result = this.prefix[left - 1];
  result = result ?? 0;

  return this.prefix[right] - result;
};
const nums = [-2, 0, 3, -5, 2, -1];
[
  [0, 2],
  [2, 5],
  [0, 5],
];
var ob = new NumArray(nums);
ob.sumRange(0, 2);
