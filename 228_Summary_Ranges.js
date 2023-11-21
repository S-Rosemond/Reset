var summaryRanges = function (nums) {
  const result = [];
  let start = null;
  let end = null;
  let prev;

  for (let i = 0; i < nums.length; i++) {
    prev = nums[i];
    if (start === null) {
      start = prev;
    }
    if (prev + 1 !== nums[i + 1]) {
      end = prev;

      let str = createRangeString(start, end);
      result.push(str);
      start = nums[i + 1];
    }
  }
  console.log(result);
  return result;
};

var createRangeString = function (start, end) {
  if (start === end) return `${end}`;
  return `${start}-->${end}`;
};

summaryRanges([1]);
summaryRanges([0, 1, 2, 4, 5, 7]);
summaryRanges([0, 2, 3, 4, 6, 8, 9]);
