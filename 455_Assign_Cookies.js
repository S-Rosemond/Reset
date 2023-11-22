// can't break cookie and share so wrong solution; todo later
var findContentChildren = function (g, s) {
  let gIndex = 0;
  let sIndex = 0;
  let count = 0;
  g = sortArray(g);
  s = sortArray(s);

  while (sIndex < s.length) {
    if (s[sIndex] >= g[gIndex]) count++, gIndex++, sIndex++;
    else sIndex++;
  }
  return count;
};

var sortArray = function (array) {
  return array.sort((a, b) => a - b);
};

[7, 8, 9, 10][(5, 6, 7, 8)];
findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]);
findContentChildren([1, 2, 3], [3]);
findContentChildren([1, 2, 3], [1, 1]);
findContentChildren([1, 2, 3], [2, 2]);
