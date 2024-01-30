var isIsomorphic = function (s, t) {
  // ikboljonme : leetcode, makes sense. Refactored.
  const mapPairS = new Map();
  const mapPairT = new Map();

  for (let i = 0; i < s.length; i++) {
    let stringCharS = s[i];
    let stringCharT = t[i];

    if (!mapPairS.has(stringCharS) && !mapPairT.has(stringCharT)) {
      [
        mapPairS.set(stringCharS, stringCharT),
        mapPairT.set(stringCharT, stringCharS),
      ];
    } else if (
      mapPairS.get(stringCharS) !== stringCharT ||
      mapPairT.get(stringCharT) !== stringCharS
    )
      return false;
  }

  return true;
};

const s = "egg";
const t = "add";

isIsomorphic("bbbaaaba", "aaabbbba"); // true
isIsomorphic(s, t); // true
isIsomorphic("ppe_", "abcb"); // false
