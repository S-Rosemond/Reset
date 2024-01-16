// codeManS (Youtube)
function mapCurrency() {
  const currencyValue = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];
  const map = new Map(currencyValue);
  return map;
}

function updateCID(changeDue, cid, currencyMap) {
  const cidOutput = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    let denomination = cid[i][0];
    let currentCIDValue = cid[i][1];
    let denominationValue = currencyMap.get(denomination);
    let totalUnits = Number(currentCIDValue / denominationValue).toFixed();
    let accumulator = 0;

    while (changeDue >= denominationValue && totalUnits > 0) {
      changeDue = Number(changeDue - denominationValue).toFixed(2);
      totalUnits--;
      accumulator++;
    }
    if (accumulator > 0) {
      const changeRemoved = denominationValue * accumulator;
      cidOutput.push([denomination, changeRemoved]);
    }
  }
  if (changeDue > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };

  return { status: "OPEN", change: cidOutput };
}

function sufficientFunds(changeDue, totalCID, cid, currencyMap) {
  if (totalCID < changeDue) return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (changeDue === totalCID) return { status: "CLOSED", change: cid };
  if (totalCID > changeDue) return updateCID(changeDue, cid, currencyMap);
}

function checkCashRegister(price, cash, cid) {
  const currencyMap = mapCurrency();
  const changeDue = cash - price;
  const totalCID = Number(
    cid.reduce((acc, currentValue) => acc + currentValue[1], 0).toFixed(2)
  );

  let change = sufficientFunds(changeDue, totalCID, cid, currencyMap);
  console.log(change);
  return change;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
// should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
// should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
