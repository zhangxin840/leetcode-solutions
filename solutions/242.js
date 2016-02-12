/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var result = true;
    var existHash = {};
    var key;

    s.split("").forEach(function(item) {
        existHash[item] = existHash[item] ? existHash[item] + 1 : 1;
    });

    t.split("").forEach(function(item) {
        existHash[item] = existHash[item] ? existHash[item] - 1 : (-
            1);
    });

    for (key in existHash) {
        if (existHash[key] !== 0) {
            result = false;
            break;
        }
    }

    return result;
};
