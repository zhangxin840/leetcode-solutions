/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var result = true;
    var div = 1;
    var left, right;

    if (x < 0) return false;

    while (div * 10 <= x) {
        div *= 10;
    }

    while (x !== 0) {
        left = Math.floor(x / div);
        right = x % 10;
        if (left !== right) {
            result = false;
            break;
        } else {
            x = Math.floor((x % div) / 10);
            div /= 100;
        }
    }

    return result;
};
