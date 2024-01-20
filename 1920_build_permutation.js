var buildArray = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  console.log(ans);
  return ans;
};

buildArray([0, 2, 1, 5, 3, 4]);
