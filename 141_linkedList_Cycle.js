// Neet code solution, never heard of algorithm used; Would not of figured it out;

var hasCycle = function (head) {
  let slow = (fast = head);

  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) return true;
  }

  return false;
};
