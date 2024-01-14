function fib(num) {
  if (num <= 2) return 1;
  let fnZero = 1;
  let fnOne = 1;
  let i = 3;

  while (i <= num) {
    const sum = fnOne + fnZero;
    fnZero = fnOne;
    fnOne = sum;
    i++;
  }

  return fnOne;
}
function sumFibs(num) {
  if (num === 0) return 0;
  let tally = 0;
  let start = 1;

  while (fib(start) <= num) {
    const result = fib(start);
    if (result % 2 !== 0) tally += result;
    start++;
  }
  console.log(tally);
  return tally;
}

sumFibs(10);
sumFibs(75024);
sumFibs(75025);
