boolean checkBST(Node root) {
	return checkRange(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
}

boolean checkRange(Node n, int min, int max){
	if (n == null) return true;
	if (n.data <= min || n.data >= max) return false;

  return checkRange(n.left, min, n.data) && checkRange(n.right, n.data, max);
}
