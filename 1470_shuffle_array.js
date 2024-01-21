var shuffle = function (nums, n) {
  const newArr = [];

  for (let i = 0, j = n; i < n; i++, j++) {
    newArr.push(nums[i]);
    newArr.push(nums[j]);
  }

  return newArr;
};

shuffle([2, 5, 1, 3], 2);
shuffle([2, 5], 1);
shuffle([2, 5, 1, 3, 4, 7], 3);
shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);
