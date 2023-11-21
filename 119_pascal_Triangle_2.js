var generate = function (rowIndex) {
  const result = [[1]];

  for (let i = 1; i <= rowIndex; i++) {
    let current = result.pop();
    let temp = [0, ...current, 0];
    let row = [];
    for (let j = 0; j < current.length + 1; j++) {
      row.push(temp[j] + temp[j + 1]);
    }
    result.push(row);
  }

  console.log(result[result.length - 1]);
  return result[result.length - 1];
};

generate(3);
generate(1);
