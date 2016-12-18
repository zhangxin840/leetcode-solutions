var corner1 = [[1]];
var corner2 = [[]];
var corner3 = [];
// var corner4 = null;
var sample1 = [[1, 2], [3, 4]];
var sample2 = [[1, 2, 3]];
var sample3 = [[1], [2], [3]];


// Given a matrix of m x n elements (m rows, n columns),
// return all elements of the matrix in spiral order.

var spiralOrder = function (matrix) {
  var result = [];
  var dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  // Steps remain for horizontal or vertical movements
  var size = [matrix[0] && matrix[0].length, matrix.length];

  var dir = 0;
  var row = 0;
  var col = -1;
  var i = 0;

  while (size[dir % 2] > 0) {
    for (i = 0; i < size[dir % 2]; i++) {
      row += dirs[dir][0];
      col += dirs[dir][1];
      result.push(matrix[row][col]);
    }

    dir = (dir + 1) % 4;
    size[dir % 2]--;
  }

  return result;
};

console.log(spiralOrder(corner1));
console.log(spiralOrder(corner2));
console.log(spiralOrder(corner3));
// console.log(spiralOrder(corner4));
console.log(spiralOrder(sample1));
console.log(spiralOrder(sample2));
console.log(spiralOrder(sample3));
