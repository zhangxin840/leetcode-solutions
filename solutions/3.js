/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var length = 0;
    var i, j;
    var existHash = {};

    i = 0;
    for (j = 0; j < s.length; j++) {
        if (existHash[s[j]] >= i) {
            i = existHash[s[j]] + 1;
        } else {
            length = Math.max(j - i + 1, length);
        }

        existHash[s[j]] = j;
    }

    return length;
};
