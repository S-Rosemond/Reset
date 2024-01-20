// Can be refactored to take less space; max can be obtained during initial hash; O(n) time
function mapFrequencyAndIndex(array) {
  const map = new Map();
  const hash = new Map();

  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
      const hashPrevValue = hash.get(el);
      hashPrevValue.push(i);
      hash.set(el, hashPrevValue);
    } else {
      map.set(el, 1);
      hash.set(el, [i]);
    }
  }

  return [map, hash];
}

function findMaxDegree(map) {
  let max = -Infinity;
  const newArr = [];
  map.forEach((value, key) => {
    if (value > max) max = value;
  });
  map.forEach((value, key) => {
    if (value === max) newArr.push(key);
  });
  return newArr;
}

function findContiguousSubarray(array, hash, originalArr) {
  const newArr = [];
  let min = Infinity;
  let minIndex;
  for (const key of array) {
    const index = hash.get(key);
    const sliceIndex = originalArr.slice(index[0], index[index.length - 1] + 1);
    newArr.push(sliceIndex);
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length < min) {
      min = newArr[i].length;
      minIndex = i;
    }
  }
  return newArr[minIndex];
}

var findShortestSubArray = function (nums) {
  const [map, indexHash] = mapFrequencyAndIndex(nums);
  const maxDegree = findMaxDegree(map);
  const minContiguousSubArray = findContiguousSubarray(
    maxDegree,
    indexHash,
    nums
  );

  return minContiguousSubArray.length;
};

findShortestSubArray([1, 2, 2, 3, 1]);
findShortestSubArray([1, 2, 2, 3, 1, 4, 2]);
