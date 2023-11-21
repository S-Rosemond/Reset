var generate = function (numRows) {
  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    let arrayEnd = result.length - 1;
    let temp = [0, ...result[arrayEnd], 0];
    let row = [];
    for (let j = 0; j < result[arrayEnd].length + 1; j++) {
      row.push(temp[j] + temp[j + 1]);
    }
    result.push(row);
  }

  return result;
};

generate(5);
