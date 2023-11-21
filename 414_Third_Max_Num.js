var thirdMax = function (nums) {
  let result = [];
  let max = -Infinity;

  for (let el of nums) {
    if (max === -Infinity) {
      max = el;
      result.push(max);
      continue;
    }
    if (result.length < 3 && result[result.length - 1] > el) result.push(el);
    else if (el > result[0]) {
      if (result.length === 3) result.pop();
      result = [el, ...result];
    } else if (el > result[result.length - 1] && el < result[0]) {
      if (el !== result[result.length - 2]) {
        if (result.length >= 3) result.pop();
        if (el < result[result.length - 1]) result.push(el);
        else {
          let [start = result[0], ...rest] = result;
          result = [start, el, ...rest];
        }
      }
    }
  }

  return result.length === 3 ? result[result.length - 1] : result[0];
};

thirdMax([5, 2, 4, 1, 3, 6, 0]); // 4
thirdMax([3, 3, 3, 3, 4, 3, 2, 3, 3]);
// thirdMax([1, 2, 2, 5, 3, 5]);
// thirdMax([5, 2, 2]);
// thirdMax([3, 2, 1]);
// thirdMax([1, 2]);
// thirdMax([2, 2, 3, 1]);
