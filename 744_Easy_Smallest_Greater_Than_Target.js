var nextGreatestLetter = function (letters, target) {
  let [left, right] = [0, letters.length - 1];
  let targetValue = target.charCodeAt(0);

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let midValue = letters[mid].charCodeAt(0);

    if (letters[mid] === target && letters[mid + 1] === undefined)
      return letters[0];
    else if (letters[mid - 1] === targetValue || letters[mid + 1 === target])
      return letters[mid];

    if (midValue > targetValue) right = mid - 1;
    else left = mid + 1;
  }

  return letters[left] ?? letters[0];
};

nextGreatestLetter(["x", "x", "y", "y"], "z");
nextGreatestLetter(["c", "f", "j"], "d"); // f
nextGreatestLetter(["a", "b", "c", "d"], "c");
nextGreatestLetter(["c", "f", "j"], "a");
nextGreatestLetter(["c", "f", "j"], "c");
nextGreatestLetter(["a", "b", "c"], "b");
nextGreatestLetter(["w", "x", "y", "z"], "z");
nextGreatestLetter(["w", "x", "y", "z"], "z");

// ~~ is faster Math.floor() from LEETCODE couldn't find correct attribution  [ for positive numbers]
// let mid = ~~((l + r) / 2);
