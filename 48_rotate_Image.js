const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var rotate = function (matrix) {
  matrix.reverse();

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = i; j < matrix.length; j++) {
      if (j == 0 && i == 0) continue;
      if (j == 1 && i == 1) continue;
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};

rotate(matrix);
