var generateMatrix = function(n) {
    var mat = [];
    var steps = [n, n];
    var dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    var dir = 0;
    var col = -1;
    var row = 0;
    var iNum = 0;
    var i = 0;

    while (steps[dir % 2]) {
        for (i = 0; i < steps[dir % 2]; i++) {
            row = row + dirs[dir][0];
            col = col + dirs[dir][1];
            mat[row] = mat[row] || [];
            mat[row][col] = ++iNum;
        }

        dir = (dir + 1) % 4;
        steps[dir % 2]--;
    }

    return mat;
};
