// todo tomorrow; find current kid with most candy with loop one
// set that max to target, loop again with map to return true false array >=
// current max;

var kidsWithCandies = function (candies, extraCandies) {
  let max = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) max = candies[i];
  }

  return candies.map((el) => el + extraCandies >= max);
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
