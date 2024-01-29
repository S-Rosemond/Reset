const arr = [1, 0, 2, 3, 0, 4, 5, 0];
const arr1 = [0, 0, 0, 0, 0, 0, 0];
const arr2 = [1, 0, 0, 3, 4];
// in place

var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      const limit = i + 1;

      let j = arr.length - 1;
      while (j > limit) {
        arr[j] = arr[j - 1];
        j--;
      }
      if (i + 1 < arr.length) arr[i + 1] = 0;
      i++;
    }
  }
  return arr;
};

console.log(duplicateZeros(arr));
console.log(duplicateZeros(arr1));
console.log(duplicateZeros(arr2));
