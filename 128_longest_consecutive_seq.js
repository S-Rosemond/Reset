function createSet(numberArray) {
  const set = new Set();

  for (let el of numberArray) {
    set.add(el);
  }
  return set;
}
// too tired
// Neetcode without seeing code just explanation.

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const set = createSet(nums);
  const seen = new Set();
  let max = -Infinity;
  let count;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (set.has(current - 1)) continue;

    count = 0;
    let temp = current;

    while (set.has(current)) {
      if (seen.has(current)) break;
      count++;
      current++;
    }
    seen.add(temp);
    max = Math.max(count, max);
  }

  return max;
};

console.log(longestConsecutive([]));
console.log(longestConsecutive([1, 3]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([1]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
