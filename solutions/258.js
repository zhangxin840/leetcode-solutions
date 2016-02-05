/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return num > 0 ? (num % 9 || 9) : 0;
};
