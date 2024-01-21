var calPoints = function (operations) {
  const stack = [];
  let temp;
  let temp2;
  for (let el of operations) {
    switch (el) {
      case "+":
        temp = stack[stack.length - 1];
        temp2 = stack[stack.length - 2];
        stack.push(temp + temp2);
        break;
      case "C":
        stack.pop();
        break;
      case "D":
        temp = stack[stack.length - 1];
        stack.push(temp * 2);
        break;
      default:
        temp = +el;
        stack.push(temp);
        break;
    }
  }

  if (stack.length === 0) return 0;
  return stack.reduce((acc, curr) => acc + curr);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
