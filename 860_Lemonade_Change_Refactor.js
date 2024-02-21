var lemonadeChange = function (bills) {
  // Refactored
  let [fives, tens] = [0, 0];

  for (let i = 0; i < bills.length; i++) {
    let paymentBill = bills[i];

    if (paymentBill === 5) fives++;
    else if (paymentBill === 10) {
      if (fives === 0) return false;
      fives--;
      tens++;
    } else {
      if (fives === 0) return false;

      if (tens > 0) {
        tens--;
        fives--;
      } else if (fives < 3) return false;
      else fives -= 3;
    }
  }

  return true;
};
