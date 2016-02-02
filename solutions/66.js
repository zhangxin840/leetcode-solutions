/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i = digits.length - 1;
    var advance = true;

    while (i >= 0 && advance) {
        if (digits[i] + 1 >= 10) {
            digits[i] = 0;
        } else {
            digits[i] = digits[i] + 1;
            advance = false;
        }

        i--;
    }

    if (advance) {
        digits.unshift(1);
    }

    return digits;
};
