// https://www.interviewbit.com/courses/programming/topics/graphs/
public void dfs() {
    //DFS uses Stack data structure
    Stack s = new Stack();
    rootNode.visited = true;
    printNode(rootNode);
    s.push(this.rootNode);
    while(!s.isEmpty()) {
        Node n = (Node)s.peek();
        Node child = getUnvisitedChildNode(n);  // Essentially this function goes through the neighbors of n, and finds the one with node.visited = false
        if(child != null) {
            child.visited = true;
            printNode(child); // print the node as you like.
            s.push(child);
        }
        else {
            s.pop();
        }
    }
    //Clear visited property of nodes
    clearNodes();
}
