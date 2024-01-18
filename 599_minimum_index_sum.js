function mapCommonElements(list1, list2, map) {
  for (let i = 0; i < list1.length; i++) {
    const el = list1[i];

    if (list2.includes(el)) {
      const secondElIdx = list2.indexOf(el);
      map.set(el, i + secondElIdx);
    }
  }
  return map;
}

function findMinValue(map) {
  let min = Infinity;

  map.forEach((value, key) => {
    min = Math.min(value, min);
  });
  return min;
}

var findRestaurant = function (list1, list2) {
  let map = new Map();
  map = mapCommonElements(list1, list2, map);
  const min = findMinValue(map);
  const newArr = [];
  map.forEach((value, key) => {
    if (value === min) newArr.push(key);
  });
  return newArr;
};

findRestaurant(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
);
findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]);
