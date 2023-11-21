var containsDuplicate = function (nums) {
  console.log(new Set(nums).size !== nums.length);
};

containsDuplicate([1, 2, 3, 1]);

// Using a Set is a way to remove duplicate values in an Array. Therefore, if the nums.length does not  == the Set.size duplicates exist
