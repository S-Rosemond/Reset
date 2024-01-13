function isDivisibleByRange(low, high, potentialCommonMultiple) {
  for (let i = low; i <= high; i++) {
    if (potentialCommonMultiple % i !== 0) return false;
  }
  return true;
}

function smallestCommons(arr) {
  const high = arr[0] > arr[1] ? arr[0] : arr[1];
  const low = arr[0] < arr[1] ? arr[0] : arr[1];
  let found = false;
  let result = 0;

  for (let i = high + 1; found !== true; i++) {
    if (i % low === 0 && i % high === 0) {
      found = isDivisibleByRange(low, high, i);
      if (found) result = i;
    }
  }

  return result;
}

console.log(smallestCommons([1, 3]));
console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
