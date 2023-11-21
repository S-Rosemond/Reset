var thirdMax = function (nums) {
  let max = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];

    // SKIP,
    // if any existing max number matches with the current array item.
    if (max === curr || secondMax === curr || thirdMax === curr) {
      continue;
    }

    // LOGIC:
    // Update max entries in reverse order
    // i.e. thirdMax -> secondMax -> max.
    thirdMax = Math.min(Math.max(curr, thirdMax), secondMax);
    secondMax = Math.min(Math.max(curr, secondMax), max);
    max = Math.max(curr, max);
  }

  return thirdMax > -Infinity ? thirdMax : max;
};
