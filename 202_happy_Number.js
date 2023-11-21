var isHappy = function (n) {
  const hash = {};

  while (n !== 1) {
    n = splitN("" + n);
    n = reduceNSquare(n);

    if (hash["" + n]) break;
    else if (hash["" + n]) hash["" + n]++;
    else hash["" + n] = 1;
  }

  return n === 1;
};

var splitN = function (n) {
  const arr = [];
  for (let el of n) {
    arr.push(el);
  }

  return arr;
};

var reduceNSquare = function (arr) {
  const result = arr.reduce((acc, curr) => acc + Number(curr) ** 2, 0);

  return result;
};

isHappy(19);
isHappy(2);
