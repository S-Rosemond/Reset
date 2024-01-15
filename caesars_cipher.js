function alphabetShiftMap() {
  const abcShift13 = [
    ["a", "n"],
    ["b", "o"],
    ["c", "p"],
    ["d", "q"],
    ["e", "r"],
    ["f", "s"],
    ["g", "t"],
    ["h", "u"],
    ["i", "v"],
    ["j", "w"],
    ["k", "x"],
    ["l", "y"],
    ["m", "z"],
    ["n", "a"],
    ["o", "b"],
    ["p", "c"],
    ["q", "d"],
    ["r", "e"],
    ["s", "f"],
    ["t", "g"],
    ["u", "h"],
    ["v", "i"],
    ["w", "j"],
    ["x", "k"],
    ["y", "l"],
    ["z", "m"],
  ];

  return new Map(abcShift13);
}

function rot13(str) {
  const map = alphabetShiftMap();
  let splitString = str.split(" ");
  return splitString
    .map((el) =>
      el
        .toLowerCase()
        .split("")
        .map((el) => {
          if (map.has(el)) return map.get(el);
          else return el;
        })
        .join("")
        .toUpperCase()
    )
    .join(" ");
}

rot13("SERR CVMMN!");
rot13("SERR PBQR PNZC");
