var getIntersectionNode = function (headA, headB) {
  const set = new Set();

  let aCurrent = headA;
  let bCurrent = headB;

  if (aCurrent === null || bCurrent === null) return null;

  while (bCurrent !== null) {
    set.add(bCurrent);
    bCurrent = bCurrent.next;
  }

  while (aCurrent !== null) {
    if (set.has(aCurrent)) return aCurrent;
    aCurrent = aCurrent.next;
  }

  return null;
};
