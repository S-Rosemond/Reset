// FCC arguments ref
function destroyer(arr) {
  let arrCopy = [...arr];
  let index = 1;

  const stackBuilder = () => {
    const stack = [];
    arrCopy.forEach((el) => {
      if (arguments[index] !== el) stack.push(el);
    });
    arrCopy = stack;
  };

  while (index < arguments.length) {
    stackBuilder();
    index++;
  }

  return arrCopy;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
