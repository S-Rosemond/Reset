var plusOne = function (digits) {
  let num = digits.join("");
  num = BigInt(num); // Js does something weird with BigInt convert some nums at end to 0
  num++;
  num += "";
  return num.split("");
};

plusOne([1, 2, 3]);
plusOne([4, 3, 2, 1]);
plusOne([9]);
plusOne([209]);
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]); //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
