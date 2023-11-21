var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i - j > k) {
      set.delete(nums[j]);
      j++;
    }
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};

containsNearbyDuplicate([1, 2, 3, 1], 3);
containsNearbyDuplicate([1, 2, 3, 0, 2], 3);
containsNearbyDuplicate([1, 0, 1, 1], 1);
containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
