var countParentheses = function (s) {
  const stack = [];
  let [top, next, check] = [undefined, undefined, undefined];
  let i = 1;
  const validBrackets = "() [] {}";

  stack.push(s[0]);

  while (i < s.length) {
    stack.push(s[i]);

    if (stack.length > 1) {
      top = stack.length - 1;
      next = stack.length - 2;

      check = stack[next] + stack[top];

      if (validBrackets.includes(check)) {
        stack.pop();
        stack.pop();
      }
    }

    i++;
  }
  return stack.length === 0;
};

function testCountParentheses(s) {
  console.log(countParentheses(s));
}

testCountParentheses("()");
testCountParentheses("()[]{}");
testCountParentheses("(]");
testCountParentheses("{[]}");
