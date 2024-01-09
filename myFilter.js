Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((el, idx, thisArr) => {
    if (callback(el, idx, thisArr)) newArray.push(el);
  });
  // Only change code above this line
  return newArray;
};
