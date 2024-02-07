function createHashFindDupe(nums) {
  const map = new Map();
  let dupe = null;

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    map.set(current, (map.get(current) || 0) + 1);

    if (map.get(current) > 1) dupe = current;
  }

  return [map, dupe];
}

function findMissingValue(map, length) {
  for (let i = 1; i <= length; i++) {
    if (!map.has(i)) return i;
  }

  return 0;
}

function findErrorNums(nums) {
  // duplicated num can appear anywhere
  // a freq hash can't assume missing num is dupe + 1
  // it must start at 1, , not sure how to use binary search here
  // dupe number is first in the array
  // must sort array
  // easy fix
  nums.sort((a, b) => a - b);
  const [map, dupe] = createHashFindDupe(nums);
  const missingValue = findMissingValue(map, nums.length);

  return [dupe, missingValue];
}

// // const nums =[1,2,2,4]
// const nums = [1, 2, 3, 4, 5, 6, 6, 7,8];

findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9]); // [2,10]
findErrorNums([1, 2, 3, 4, 5, 6, 7, 8, 10, 8]); // [2,9]
findErrorNums([1, 2, 2, 4]); // [2,3]
