/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var low = 0;
    var high = s.length - 1;
    var result = true;

    var isCharacter = function(input) {
        var result = false;

        if (/\w/.test(input)) {
            result = true;
        }

        return result;
    };

    while (low < high) {
        while (low < high && !isCharacter(s[low])) low++;
        while (low < high && !isCharacter(s[high])) high--;

        if (s[low++].toLowerCase() !== s[high--].toLowerCase()) {
            result = false;
            break;
        }
    }

    return result;
};
