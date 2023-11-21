var climbStairs = function (n) {
  if (n === 1) return 1;
  let dp = 1;
  let dp2 = dp;

  for (let i = 2; i <= n; i++) {
    let temp = dp + dp2;
    dp = dp2;
    dp2 = temp;
  }
  console.log(dp2);
  return dp2;
};

climbStairs(5);
climbStairs(3);
