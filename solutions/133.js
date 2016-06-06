/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function (graph) {
  var result = graph;
  var map = {};
  var queue = [];
  var node, newNode, neighbor;
  var i;

  if (graph) {
    result = new UndirectedGraphNode(graph.label);
    map[graph] = result;
    queue.push(graph);
  }

  while (queue.length > 0) {
    node = queue.shift();

    for (i = 0; i < node.neighbors.length; i++) {
      neighbor = node.neighbors[i];

      if (map[neighbor]) {
        // add copied neighbor to the copy
        map[node].neighbors.push(map[neighbor]);
      } else {
        newNode = new UndirectedGraphNode(neighbor.label);
        map[neighbor] = newNode;

        // add copied neighbor to the copy
        map[node].neighbors.push(newNode);

        // push others
        queue.push(neighbor);
      }
    }
  }

  return result;
};
