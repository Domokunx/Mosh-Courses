package com.cliff.BST;

public class Tree {
    private class Node {
        private int value;
        private Node leftChild = null;
        private Node rightChild = null;

        public Node(int value) {
            this.value = value;
        }

        @Override
        public String toString() {
            return Integer.toString(value);
        }
    }

    private Node root = null;

    public void insert(int value) {
        if (root == null) {
            root = new Node(value);
            return;
        }

        Node currentNode = root;
        if (currentNode.value == value) throw new IllegalStateException("Node already exists");
        checkCurrentNode(value, currentNode);
    }
    public boolean find(int value) {
        Node currentNode = root;
        while (currentNode.value != value) {
            if (value < currentNode.value) {
                currentNode = currentNode.leftChild;
                if (currentNode == null)
                    return false;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.rightChild;
                if (currentNode == null)
                    return false;
            }
            }
        return true;
    }

    public void traversePreOrder() {
        traversePreOrder(root);
    }
    private void traversePreOrder(Node root) {
        if (root == null) return;

        System.out.println(root);
        traversePreOrder(root.leftChild);
        traversePreOrder(root.rightChild);
    }

    public void traverseInOrder() {
        traverseInOrder(root);
    }
    private void traverseInOrder(Node root) {
        if (root == null) return;

        traverseInOrder(root.leftChild);
        System.out.println(root);
        traverseInOrder(root.rightChild);
    }

    public void traversePostOrder() {
        traversePostOrder(root);
    }
    private void traversePostOrder(Node root) {
        if (root == null) return;

        traversePostOrder(root.leftChild);
        traversePostOrder(root.rightChild);
        System.out.println(root);
    }

    public int height() {
        return height(root);
    }
    private int height(Node root) {
        if (root == null) return -1;

        return 1 + Math.max(height(root.leftChild), height(root.rightChild));
    }

    public int min() {
        if (root == null) throw new IllegalStateException("Empty bodoh");
        return min(root);
    }
    private int min(Node root) {
        if (root == null) return Integer.MAX_VALUE;

        int leftMin = min(root.leftChild);
        int rightMin = min(root.rightChild);

        return Math.min(Math.min(leftMin, rightMin), root.value);
    }

    public boolean equal(Tree tree) {
        Node currentNode1 = root;
        Node currentNode2 = tree.root;
        return equal(currentNode1, currentNode2);
    }
    private boolean equal(Node currentNode1, Node currentNode2) {
        if (currentNode1 == null && currentNode2 == null) return true;

        if (currentNode1 != null && currentNode2 != null)
            return currentNode1.value == currentNode2.value
            && equal(currentNode1.leftChild, currentNode2.leftChild)
            && equal(currentNode1.rightChild, currentNode2.rightChild);

        return false;
    }

    private boolean isLeaf(Node node) {
        return node.leftChild == null && node.rightChild == null;
    }
    private void checkCurrentNode(int value, Node currentNode) {
        if (value < currentNode.value) {
            checkLeftChild(value, currentNode);
        }
        else if (value > currentNode.value) {
            checkRightChild(value, currentNode);
        }
    }
    private void checkLeftChild(int value, Node currentNode) {
        if (currentNode.leftChild == null) {
            currentNode.leftChild = new Node(value);
        }
        else {
            currentNode = currentNode.leftChild;
            checkCurrentNode(value, currentNode);
        }
    }
    private void checkRightChild(int value, Node currentNode) {
        if (currentNode.rightChild == null) {
            currentNode.rightChild = new Node(value);
        }
        else {
            currentNode = currentNode.rightChild;
            checkCurrentNode(value, currentNode);
        }
    }
}
