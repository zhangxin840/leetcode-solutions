/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    var i = 0;
    var skip = 0;

    while (i < s.length && i < p.length && ((s[i] === p[i]) || p[i] === '.')) {
        i++;
    }

    if (i === p.length) {
        return i === s.length;
    }

    if (p[i] === '*') {
        for (skip = 0; skip + i <= s.length; skip++) {
            if (isMatch(s.substring(i + skip), p.substring(i + 1))) {
                return true;
            }
        }
    }

    return false;
};
