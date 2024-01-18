function mapToRankThree() {
  const firstThreeRank = [
    [1, "Gold Medal"],
    [2, "Silver Medal"],
    [3, "Bronze Medal"],
  ];
  const map = new Map(firstThreeRank);
  return map;
}

function mapSortedRank(sortedArr, rankThreeMap) {
  const map = new Map();

  for (let i = 0; i < sortedArr.length; i++) {
    if (i < 3) {
      map.set(sortedArr[i], rankThreeMap.get(i + 1));
    } else map.set(sortedArr[i], String(i + 1));
  }

  return map;
}

var findRelativeRanks = function (score) {
  // max heap prob most efficient solution;
  // alt n log n solution = sort
  // if toSorted not available:
  //let sortedScore = [...score].sort((a, b) => b - a)
  const sortedScore = score.toSorted((a, b) => b - a);
  const firstThreeRank = mapToRankThree();
  const rankedMap = mapSortedRank(sortedScore, firstThreeRank);
  const newArr = [];

  for (let i = 0; i < score.length; i++) {
    newArr.push(rankedMap.get(score[i]));
  }

  return newArr;
};

findRelativeRanks([5, 4, 3, 2, 1]);
findRelativeRanks([10, 3, 8, 9, 4]);
