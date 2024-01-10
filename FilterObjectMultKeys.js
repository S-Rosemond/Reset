// For reference filtering Obj with multiple keys, couldn't find alt solution
// multiple keys use every
function whatIsInAName(collection, source) {
  const keysToSearch = Object.keys(source);

  return collection.filter((el) =>
    keysToSearch.every((key) => el[key] === source[key])
  );
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
