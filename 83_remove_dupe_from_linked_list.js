var deleteDuplicates = function (head) {
  let prev = head;
  let next;
  const dummy = prev;

  while (prev !== null) {
    next = prev.next;

    if (next) {
      if (prev.val === next.val) {
        (next = next.next), (prev.next = next);
      } else prev = next;
    } else prev = next;
  }

  return dummy;
};
