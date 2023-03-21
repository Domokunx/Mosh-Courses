package com.cliff.BST;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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

    public void traverseLevelOrder() {
        for (int i = 0; i <= height(root); i++) {
            var nodeArr = nodeKthDistanceFromRoot(i);
            System.out.println(Arrays.toString(nodeArr));
        }
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

    public boolean isValidBST() {
        Node currentNode = root;
        if (currentNode == null) return true;
        if (isLeaf(currentNode)) return true;

        int minValue = Integer.MIN_VALUE;
        int maxValue = Integer.MAX_VALUE;

        boolean left = checkValueInRange(currentNode.leftChild,  minValue, currentNode.value);
        boolean right = checkValueInRange(currentNode.rightChild, currentNode.value, maxValue);

        return left && right;
    }
    private boolean checkValueInRange(Node currentNode, int minLimit, int maxLimit) {
        if (currentNode == null) return true;

        if (currentNode.value <= minLimit || currentNode.value >= maxLimit) return false;

        return checkValueInRange(currentNode.leftChild,  minLimit, currentNode.value)
                && checkValueInRange(currentNode.rightChild, currentNode.value, maxLimit);
    }

    public int[] nodeKthDistanceFromRoot(int K) {
        Node currentNode = root;
        ArrayList<Integer> nodes = new ArrayList<>();
        nodeKthDistanceFromRoot(K, currentNode, nodes);
        return nodes.stream().mapToInt(i -> i).toArray();
    }
    private void nodeKthDistanceFromRoot(int K, Node currentNode, ArrayList<Integer> nodes) {
        if (currentNode == null) return;

        if (K == 0) {
            nodes.add(currentNode.value);
            return;
        }

        nodeKthDistanceFromRoot(K - 1, currentNode.leftChild, nodes);
        nodeKthDistanceFromRoot(K - 1, currentNode.rightChild, nodes);
    }

    public int getSize() {
        int size = 0;
        return getSize(root, size);
    }
    private int getSize(Node currentNode, int size) {
        if (currentNode == null) return 0;

        return 1 + getSize(currentNode.leftChild, size) + getSize(currentNode.rightChild, size);
    }

    public int countLeaves() {
        return countLeaves(root, 0);
    }
    private int countLeaves(Node currentNode, int leaves) {
        if (currentNode == null) return 0;
        if (isLeaf(currentNode)) {
            return ++leaves;
        }

        return countLeaves(currentNode.leftChild, leaves) + countLeaves(currentNode.rightChild, leaves);
    }

    public int maxValue() {
        if (root == null) return 0;
        return maxValue(root);
    }
    private int maxValue(Node currentNode) {
        if (currentNode.rightChild == null) return currentNode.value;

        return maxValue(currentNode.rightChild);
    }

    public int minValue() {
        if (root == null) return 0;
        return minValue(root);
    }
    private int minValue(Node currentNode) {
        if (currentNode.leftChild == null) return currentNode.value;

        return minValue(currentNode.leftChild);
    }

    public boolean contains(int value) {
        return contains(root, value);
    }
    private boolean contains(Node currentNode, int value) {
        if (currentNode == null) return false;

        if (currentNode.value == value) return true;
        else if (currentNode.value > value) return contains(currentNode.leftChild, value);
        else return contains(currentNode.rightChild, value);
    }

    public boolean areSiblings(int first, int second) {
        return areSiblings(root, first, second);
    }
    private boolean areSiblings(Node currentNode, int first, int second) {
        if (currentNode == null || isLeaf(currentNode)) return false;

        boolean areSiblings = false;
        if (currentNode.leftChild != null && currentNode.rightChild != null) {
            areSiblings = (currentNode.leftChild.value == first && currentNode.rightChild.value == second)
                        || (currentNode.leftChild.value == second && currentNode.rightChild.value == first);
        }

        return areSiblings
                || areSiblings(currentNode.leftChild, first, second)
                || areSiblings(currentNode.rightChild, first, second);
    }

    public List<Integer> getAncestors(int value) {
        List<Integer> ancestors = new ArrayList<Integer>();
        return getAncestors(root, value, ancestors);
    }
    private List<Integer> getAncestors(Node currentNode, int value, List<Integer> ancestors) {
        if (currentNode == null) return null;

        if (currentNode.value == value) return ancestors;
        ancestors.add(currentNode.value);

        if (value < currentNode.value)
            return getAncestors(currentNode.leftChild, value, ancestors);
        else {
            return getAncestors(currentNode.rightChild, value, ancestors);
        }
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
