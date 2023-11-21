var removeDuplicates = function (nums) {
  const unique = new Set(nums);
  const result = Array.from(unique);

  for (let i = 0; i < nums.length; i++) {
    if (i < result.length) nums[i] = result[i];
    else nums[i] = "_";
  }

  return unique.size;
};

removeDuplicates([1, 1, 2]);
