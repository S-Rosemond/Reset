// Hate this challenge
var spiralOrder = function (matrix) {
  const result = [];
  let left = 0;
  let top = 0;
  let right = matrix[0].length;
  let bottom = matrix.length;

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1]);
    }
    right--;

    if (!(left < right && top < bottom)) break;

    for (let i = right - 1; i >= left; i--) {
      result.push(matrix[bottom - 1][i]);
    }
    bottom--;

    for (let i = bottom - 1; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }
  return result;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

spiralOrder([[7], [9], [6]]);

spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);

spiralOrder([
  [1, 2],
  [3, 4],
]);
spiralOrder(matrix);
spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
spiralOrder([[1]]);
spiralOrder([[1, 2]]);
