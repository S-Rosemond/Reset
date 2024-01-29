var validMountainArray = function (arr) {
  const validStart = arr[0] < arr[1];
  if (!validStart) return false;
  if (arr.length <= 2) return false;

  let descending = false;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i] || arr[i + 1] === arr[i]) return false;
    if (arr[i + 1] < arr[i]) descending = true;
    if (descending && i < arr.length - 1 && arr[i + 1] > arr[i]) return false;
  }
  return descending ? true : false;
};

validMountainArray([3, 5, 4]);
validMountainArray([3, 5, 5]);
