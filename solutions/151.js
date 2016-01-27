/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var i;
    var result = '';
    var j = str.length;

    for (i = str.length - 1; i >= 0; i--) {
        if (str[i] === ' ') {
            j = i;
        } else if (i === 0 || str.charAt(i - 1) == ' ') {
            if (result.length !== 0) {
                result += ' ';
            }
            result += str.substring(i, j);
        }
    }

    return result;
};
