// https://www.interviewbit.com/problems/prime-numbers/#

module.exports = {
  //param A : integer
  //return a array of integers
  sieve: function (A) {
    var map = {};
    var results = [];

    for (var i = 1; i <= A; i++) {
      map[i] = 1;
    }

    for (i = 2; i <= A; i++) {
      for (j = i; j * i <= A; j++) {
        map[i * j] = 0;
      }
    }

    for (var i = 2; i <= A; i++) {
      if (map[i] === 1) {
        results.push(i);
      }
    }

    return results;
  }
};
