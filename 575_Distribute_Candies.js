var distributeCandies = function (candyType) {
  let amountCanEat = candyType.length / 2;
  const typesEaten = new Set();

  for (let i = 0; i < candyType.length; i++) {
    if (typesEaten.has(candyType[i])) continue;
    else if (amountCanEat) {
      typesEaten.add(candyType[i]);
      amountCanEat--;
    }
  }
  return typesEaten.size;
};

distributeCandies([1, 1, 2, 2, 3, 3]);
