var mySqrt = function (x) {
  if (x === 1 || x === 0) return x;
  if (x === 2 || x === 3) return 1;
  let prev = 2;

  for (let i = 2; i < x; i++) {
    if (i * i > x) return prev;
    else if (i * i === x) return i;
    else prev = i;
  }
};

mySqrt(0);
mySqrt(1);
mySqrt(4);
mySqrt(8);
mySqrt(16);
mySqrt(17);
