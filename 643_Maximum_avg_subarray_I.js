// First try solution ahhh!!!!!
function formWindow(arr, k) {
  let result = 0;
  for (let i = 0; i < k; i++) {
    result += arr[i];
  }

  return result;
}

var findMaxAverage = function (nums, k) {
  let window = formWindow(nums, k);
  let max = window / k;

  for (let i = k, j = 0; i < nums.length; i++, j++) {
    window = nums[i] + window - nums[j];
    let avg = window / k;
    max = Math.max(max, avg);
  }

  return max;
};

findMaxAverage([5], 1);
findMaxAverage([1, 12, -5, -6, 50, 3], 4);
