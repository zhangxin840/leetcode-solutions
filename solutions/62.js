/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  var mat = [];
  var temp;

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
      mat[k][l] = mat[k + 1][l] + mat[k][l + 1];
    }
  }

  return mat[0][0];
};
