function steamrollArray(arr) {
  if (arr.every((el) => Array.isArray(el) === false)) return arr;

  let flattenArray = [];
  for (const el of arr) {
    if (Array.isArray(el) === false) {
      flattenArray.push(el);
      continue;
    }
    if (Array.isArray(el)) {
      const temp = [...el];
      flattenArray.push(...temp);
    }
  }
  arr = flattenArray;
  const result = steamrollArray(arr);
  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
