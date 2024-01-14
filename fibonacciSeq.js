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
