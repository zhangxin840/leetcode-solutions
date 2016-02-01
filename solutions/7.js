/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    var MAX = 2147483648 - 1;

    while (x !== 0) {
        if (Math.abs(result) > ((MAX - Math.abs(x % 10)) / 10)) {
            result = 0;
            break;
        }

        result = result * 10 + x % 10;
        x = (x - x % 10) / 10;
    }

    return result;
};
