const mergeStack = (poppedElement, array) => {
  const set = new Set([...poppedElement, ...array]);

  return set;
};

const createSet = (arr) => {
  const set = new Set(arr);
  return set;
};

function uniteUnique(arr) {
  let readyForMerge = false;
  const stack = [];

  for (const el of arguments) {
    if (readyForMerge) {
      const temp = stack.pop();
      const mergedSet = mergeStack(temp, el);
      stack.push(mergedSet);
    }

    if (stack.length === 0 && readyForMerge === false) {
      stack.push(el);
      readyForMerge = true;
    }
  }
  // return stack.pop();
  const temp = stack.pop();
  return [...temp];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// not an array [ [],[],[]]
