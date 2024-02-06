var isSubsequence = function (s, t) {
  for (let tPointer = 0, sPointer = 0; tPointer < t.length; tPointer++) {
    if (s[sPointer] === t[tPointer]) sPointer++;

    if (sPointer === s.length) return true;
  }

  return false;
};
