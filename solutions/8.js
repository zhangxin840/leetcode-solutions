/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var maxDiv10 = Number.MAX_VALUE / 10;

    var i = 0,
        n = str.length;

    while (i < n && /\s/.test(str[i])) i++;
    var sign = 1;
    if (i < n && str[i] == '+') {
        i++;
    } else if (i < n && str[i] == '-') {
        sign = -1;
        i++;
    }

    var num = 0;
    while (i < n && /[0-9]/.test(str[i])) {
        var digit = +(str[i]);
        if (num > maxDiv10 || num == maxDiv10 && digit >= 8) {
            return sign == 1 ? Number.MAX_VALUE : Number.MIN_VALUE;
        }
        num = num * 10 + digit;
        i++;
    }

    var result = sign * num;

    if (result > 0) {
        result = sign * num > 2147483647 ? 2147483647 : sign * num;
    } else {
        result = sign * num < -2147483648 ? -2147483648 : sign * num;
    }

    return result
};
