// Avoided mutating original array; less extra space if allowed to mutate original; unsure if allowed.
var canPlaceFlowers = function (flowerbed, n) {
  let dp = 0;
  let dp2 = 1;
  const flowerbedCopy = [...flowerbed];
  const isEmpty = (num) =>
    flowerbedCopy[num] === 0 || flowerbedCopy[num] === undefined;

  while (dp < flowerbedCopy.length) {
    if (isEmpty(dp - 1) && isEmpty(dp) && isEmpty(dp2)) {
      flowerbedCopy[dp] = 1;
      n--;
    }

    dp++;
    dp2++;
  }

  return n <= 0;
};

canPlaceFlowers([0, 0, 1, 0, 0], 1); // true
canPlaceFlowers([1], 1); // should be false
canPlaceFlowers([0], 1); // should be true
canPlaceFlowers([0, 0, 1, 0, 1], 1); // should be true
canPlaceFlowers([1, 0, 0, 0, 0, 1], 2); // should be false
canPlaceFlowers([1, 0, 0, 0, 1], 1); // true
canPlaceFlowers([1, 0, 0, 0, 1], 2); // false
canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2); // true
