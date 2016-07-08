/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  var mat = [];
  var temp;
  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;

  for (var i = 0; i < m + 1; i++) {
    temp = [];
    for (var j = 0; j < n + 1; j++) {
      temp.push(0);
    }
    mat.push(temp);
  }

  mat[m - 1][n] = 1;
  for (var k = m - 1; k >= 0; k--) {
    for (var l = n - 1; l >= 0; l--) {
      mat[k][l] = (obstacleGrid[k][l] === 1) ? 0 : mat[k + 1][l] + mat[k][l +
        1
      ];
    }
  }

  return mat[0][0];
};
