function addTogether() {
  if (typeof arguments[0] !== "number") return undefined;
  if (arguments.length > 1 && typeof arguments[1] !== "number")
    return undefined;

  let x = arguments[0];
  // unnecessary guard but doesn't hurt
  if (arguments[1] && typeof arguments[1] === "number") return x + arguments[1];

  return function () {
    if (typeof arguments[0] === "number") return x + arguments[0];
    else return undefined;
  };
}

console.log(addTogether(2, undefined));
console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether(2)([4]));
