var finalValueAfterOperations = function (operations) {
  let ans = 0;

  for (let opsCall of operations) {
    switch (opsCall) {
      case "X--":
      case "--X":
        ans -= 1;
        break;
      default:
        ans += 1;
        break;
    }
  }
  return ans;
};

finalValueAfterOperations(["--X", "X++", "X++"]);

// case "X++":
//     case "++X":

//     break;
