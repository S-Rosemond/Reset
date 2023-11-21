var findDisappearedNumbers = function (nums) {
  let set = new Set(nums);
  let temp = [];

  for (let i = 1; i <= nums.length; i++) {
    if (set.has(i)) continue;
    else temp.push(i);
  }

  return temp;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
