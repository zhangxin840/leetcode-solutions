// Test case first
// Check all corners and failures
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  var adj = {};
  var chars = {};
  var visited = {};
  var path = [];
  var adjCount = 0;

  var buildGraph = function (adj, words) {
    var charA, charB, wordA, wordB;
    for (var i = 0; i < words.length; i++) {
      for (var k = 0; k < words[i].length; k++) chars[words[i][k]] = true;
      if (i > 0) {
        wordA = words[i - 1], wordB = words[i];
        for (var j = 0; j < Math.min(wordA.length, wordB.length); j++) {
          charA = wordA[j];
          charB = wordB[j];
          if (charA !== charB) {
            adjCount++;
            adj[charA] = adj[charA] || {};
            adj[charA][charB] = true;
            break;
          }
        }
      }

    }
  };

  var searchGraph = function (adj, visited, entrance, path) {
    // Mark
    visited[entrance] = 1;

    // Iterate
    for (var next in adj[entrance]) {
      // Check
      if (visited[next] === 1) return false;
      if (!visited[next]) {
        // Recursion
        if (!searchGraph(adj, visited, next, path)) {
          return false;
        }
      }
    }

    // Visit
    visited[entrance] = 2;
    path.push(entrance);

    // Return
    return true;
  };

  buildGraph(adj, words);
  console.log(JSON.stringify(chars));
  console.log(JSON.stringify(adj));

  // Test all conrners
  if (adjCount === 0) {
    if (words[0] > words[1]) {
      return '';
    }
  }

  for (var char in chars) {
    if (!visited[char]) {
      if (!searchGraph(adj, visited, char, path)) return '';
    }
  }

  return path.reverse().join('');
};
