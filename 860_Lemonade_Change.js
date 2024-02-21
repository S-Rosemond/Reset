var lemonadeChange = function (bills) {
  // no sorting according to test case : queue;
  const map = new Map([
    [5, 0],
    [10, 0],
  ]);
  for (let i = 0; i < bills.length; i++) {
    let paymentBill = bills[i];

    if (paymentBill === 5) {
      map.set(paymentBill, map.get(paymentBill) + 1);
    } else if (paymentBill === 10) {
      if (map.get(5) === 0) return false;

      map.set(5, map.get(5) - 1);
      map.set(paymentBill, map.get(paymentBill) + 1);
    } else if (paymentBill === 20) {
      if (map.get(5) === 0 && map.get(10) >= 0) return false;

      if (map.get(10) > 0) {
        map.set(10, map.get(10) - 1);
        map.set(5, map.get(5) - 1);
      } else if (map.get(5) < 3) return false;
      else {
        map.set(5, map.get(5) - 3);
      }
    }
  }

  return true;
};

lemonadeChange([5, 5, 10, 10, 20]);
lemonadeChange([5, 5, 5, 10, 20]);

lemonadeChange([5, 5, 5, 10, 5, 5, 5, 20]);
lemonadeChange([5, 10, 5, 5, 5, 5, 5, 20]);
