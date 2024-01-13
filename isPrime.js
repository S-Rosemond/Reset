function isPrime(num) {
  for (let i = 2; i <= num; i++) {
    if (i === num) continue;
    if (num % i === 0) return false;
  }
  return true;
}
