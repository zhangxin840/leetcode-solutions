/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    var position;
    var tail;
    var i;
    var rows = [];
    var ret = '';

    if (numRows <= 0) {
        return '';
    }

    if (numRows === 1) {
        return s;
    }

    for (i = 0; i < numRows; i++) {
        rows.push([]);
    }

    for (i = 0; i < s.length; i++) {
        tail = i % (2 * numRows - 2);
        position = tail > (numRows - 1) ? (2 * (numRows - 1) - tail) : tail;
        rows[position].push(s[i]);
    }

    for (i = 0; i < rows.length; i++) {
        ret += rows[i].join('');
    }

    return ret;
};
