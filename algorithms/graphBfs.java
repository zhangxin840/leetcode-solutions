public void bfs() {
    //BFS uses Queue data structure
    Queue q = new LinkedList();
    rootNode.visited = true;
    printNode(this.rootNode);
    q.add(this.rootNode);
    while(!q.isEmpty()) {
        Node n = (Node)q.remove();
        Node child = null;
        while((child = getUnvisitedChildNode(n)) != null) {
            child.visited = true;
            printNode(child);
            q.add(child);
        }
    }
    //Clear visited property of nodes
    clearNodes();
}
