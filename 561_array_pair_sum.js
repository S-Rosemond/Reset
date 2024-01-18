var arrayPairSum = function (nums) {
  const sortedNums = [...nums]
    .sort((a, b) => a - b)
    .filter((el, idx) => idx % 2 === 0)
    .reduce((acc, currentValue) => acc + currentValue, 0);
  return sortedNums;
};

arrayPairSum([1, 4, 3, 2]);
arrayPairSum([6, 2, 6, 5, 1, 2]);
