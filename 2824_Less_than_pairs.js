// while loop easier to implement but will use for loop because 0 <= i and i < j;
// j will always be less than n because n is array length of 0 indexed array;
// brute force = O (n ** 2); // can't see faster solution
// I thought you couldn't sort because of i < j meant keep current order
// optimal solution = sort then use two pointer method

var countPairs = function (nums, target) {
  if (nums.length < 2) return 0;
  let count = 0;

  for (let i = 0, j = 1; i < nums.length; j++) {
    const sum = nums[i] + nums[j];

    if (sum < target) count++;
    if (i === nums.length - 2) break;
    if (j === nums.length - 1) {
      i++;
      j = i;
    }
  }

  return count;
};

countPairs([-1], -2);
countPairs([-1, 1, 2, 3, 1], 2);
countPairs([-6, 2, 5, -2, -7, -1, 3], -2);
