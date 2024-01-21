function mapSortedHorizontalValue(array) {
  const sortedXValues = [...array]
    .sort((a, b) => a[0] - b[0])
    .map((el) => el[0]);

  return sortedXValues;
}

function findWidestVerticalArea(array) {
  let ans = 0;

  for (let i = 0; i < array.length; i++) {
    const maxHArea = array[i + 1] - array[i];
    if (maxHArea > ans) ans = maxHArea;
  }

  return ans;
}

var maxWidthOfVerticalArea = function (points) {
  const mappedHorizontalValues = mapSortedHorizontalValue(points);
  const ans = findWidestVerticalArea(mappedHorizontalValues);
  return ans;
};

maxWidthOfVerticalArea([
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
]);
maxWidthOfVerticalArea([
  [3, 1],
  [9, 0],
  [1, 0],
  [1, 4],
  [5, 3],
  [8, 8],
]);
