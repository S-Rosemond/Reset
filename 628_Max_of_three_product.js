var maximumProduct = function (nums) {
  // const sortedNumCopy = nums.toSorted((a, b) => a - b)
  const length = nums.length;
  const sortedNumCopy = [...nums].sort((a, b) => a - b);
  let result = -Infinity;

  const prod1 = sortedNumCopy[0] * sortedNumCopy[1] * sortedNumCopy[2];
  const prod2 = sortedNumCopy[0] * sortedNumCopy[1] * sortedNumCopy[length - 1];
  const prod3 =
    sortedNumCopy[0] * sortedNumCopy[length - 1] * sortedNumCopy[length - 2];
  const prod4 =
    sortedNumCopy[length - 1] *
    sortedNumCopy[length - 2] *
    sortedNumCopy[length - 3];
  const prod = [prod1, prod2, prod3, prod4];
  for (let el of prod) {
    result = Math.max(result, el);
  }

  return result;
};

maximumProduct([-100, -98, -1, 2, 3, 4]);
maximumProduct([-100, 4, 7]);
maximumProduct([1, 2, 3]);
maximumProduct([1, 2, 3, 4]);
maximumProduct([-1, -2, -3]);
