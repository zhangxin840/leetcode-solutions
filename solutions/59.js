/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  var dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];
  var iDir = 0;
  var iCol = -1;
  var iRow = 0;
  var iNum = 0;
  var steps = [n, n];
  var mat = [];
  var iStep = 0;

  while (steps[iDir % 2]) {
    for (iStep = 0; iStep < steps[iDir % 2]; iStep++) {
      iRow = iRow + dirs[iDir][0];
      iCol = iCol + dirs[iDir][1];
      mat[iRow] = mat[iRow] || [];
      mat[iRow][iCol] = ++iNum;
    }

    iDir = (iDir + 1) % 4;
    steps[iDir % 2]--;
  }

  return mat;
};
