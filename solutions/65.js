/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    var i = 0,
        n = s.length;
    var isNumeric = false;

    while (i < n && /\s/.test(s[i])) i++;
    if (i < n && (s[i] == '+' || s[i] == '-')) i++;

    while (i < n && /[0-9]/.test(s[i])) {
        i++;
        isNumeric = true;
    }

    if (i < n && s[i] == '.') {
        i++;
        while (i < n && /[0-9]/.test(s[i])) {
            i++;
            isNumeric = true;
        }
    }
    if (isNumeric && i < n && s[i] == 'e') {
        i++;
        isNumeric = false;
        if (i < n && (s[i] == '+' || s[i] == '-')) i++;
        while (i < n && /[0-9]/.test(s[i])) {
            i++;
            isNumeric = true;
        }
    }
    while (i < n && /\s/.test(s[i])) i++;

    return isNumeric && i == n;
};
