/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var i, j;
    var index = -1;

    for (i = 0;; i++) {
        for (j = 0;; j++) {
            if (j == needle.length) return i;
            if (i + j == haystack.length) return -1;
            if (needle.charAt(j) != haystack.charAt(i + j)) break;
        }
    }

    return index;
};
