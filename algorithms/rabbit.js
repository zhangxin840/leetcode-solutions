var getCarrots = function (matrix) {
  var carrorts = 0;
  var start;

  var getMaxPoint = function (row, col) {
    var dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    var max = 0;
    var maxRow, maxCol, nextRow, nextCol;
    var i;

    for (i = 0; i < dirs.length; i++) {
      nextRow = row + dirs[i][0];
      nextCol = col + dirs[i][1];
      if (matrix[nextRow][nextCol] > max) {
        max = matrix[nextRow][nextCol];
        maxRow = nextRow;
        maxCol = nextCol;
      }
    }

    if (!maxRow || !maxCol) return null;

    return {
      row: maxRow,
      col: maxCol
    }
  };

  var getStartPoint = function (matrix) {
    var start = {
      row: ((matrix.length - 1) >> 1),
      col: ((matrix[0].length - 1) >> 1)
    };

    // TODO: Get max point near center

    return start;
  };

  var eat = function (row, col) {
    var nextMove;

    if (!matrix[row][col]) return;

    carrorts += matrix[row][col];
    matrix[row][col] = 0;

    nextMove = getMaxPoint(row, col);
    if (nextMove) {
      eat(nextMove.row, nextMove.col);
    }
  };

  start = getStartPoint();
  eat(start.row, start.col);

  return carrorts;
};
