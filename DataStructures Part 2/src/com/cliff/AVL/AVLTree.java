package com.cliff.AVL;

public class AVLTree {
    private class AVLNode {
        private int value;
        private int height = 0;
        private AVLNode leftChild = null;
        private AVLNode rightChild = null;

        public AVLNode(int value) {
            this.value = value;
        }

        @Override
        public String toString() {
            return Integer.toString(value);
        }
    }

    private AVLNode root = null;

    public void insert(int value) {
        root = insert(value, root);
    }
    private AVLNode insert(int value, AVLNode currentNode) {
        if (currentNode == null) {
            return new AVLNode(value);
        }

        if (value < currentNode.value) {
            currentNode.leftChild = insert(value, currentNode.leftChild);
        }
        else {
            currentNode.rightChild = insert(value, currentNode.rightChild);
        }
        calculateHeight(currentNode);

        return balance(currentNode);
    }

    public void traversePreOrder() {
        traversePreOrder(root);
    }
    private void traversePreOrder(AVLNode currentNode) {
        if (currentNode == null) return;
        System.out.println(currentNode.value);
        traversePreOrder(currentNode.leftChild);
        traversePreOrder(currentNode.rightChild);
    }

    public void traverseInOrder() {
        traverseInOrder(root);
    }
    private void traverseInOrder(AVLNode currentNode) {
        if (currentNode == null) return;
        traverseInOrder(currentNode.leftChild);
        System.out.println(currentNode.value);
        traverseInOrder(currentNode.rightChild);
    }

    public void traversePostOrder() {
        traversePostOrder(root);
    }
    private void traversePostOrder(AVLNode currentNode) {
        if (currentNode == null) return;
        traversePostOrder(currentNode.leftChild);
        traversePostOrder(currentNode.rightChild);
        System.out.println(currentNode.value);
    }

    //Exercises
    public boolean isBalanced() {
        return (getBalanceFactor(root) > -2 && getBalanceFactor(root) < 2);
    }

    public int size() {
        return size(root);
    }
    private int size(AVLNode currentNode) {
        if (currentNode == null) return 0;

        else return 1 + size(currentNode.leftChild) + size(currentNode.rightChild);
    }
    public boolean isPerfect() {
        return size(root) == Math.pow(2, getHeight(root) + 1) - 1;
    }

    private boolean isLeaf(AVLNode node) {
        return node.leftChild == null && node.rightChild == null;
    }

    private int getBalanceFactor(AVLNode currentNode) {
        return currentNode == null ? 0 : getHeight(currentNode.leftChild) - getHeight(currentNode.rightChild);
    }
    private boolean isLeftHeavy(AVLNode currentNode) {
        return getBalanceFactor(currentNode) > 1;
    }
    private boolean isRightHeavy(AVLNode currentNode) {
        return getBalanceFactor(currentNode) < -1;
    }
    private void calculateHeight(AVLNode currentNode) {
        currentNode.height = Math.max(getHeight(currentNode.leftChild), getHeight(currentNode.rightChild)) + 1;
    }
    private int getHeight(AVLNode node) {
        return node == null ? -1 : node.height;
    }
    private AVLNode balance(AVLNode currentNode) {
        if (isLeftHeavy(currentNode)) {
            if (getBalanceFactor(currentNode.leftChild) < 0) {
                currentNode.leftChild = rotateLeft(currentNode.leftChild);
            }
            currentNode = rotateRight(currentNode);
        }
        else if (isRightHeavy(currentNode)) {
            if (getBalanceFactor(currentNode.rightChild) > 0)
                currentNode.rightChild = rotateRight(currentNode.rightChild);
            currentNode = rotateLeft(currentNode);
        }
        return currentNode;
    }
    private AVLNode rotateLeft(AVLNode currentNode) {
        AVLNode newRoot = currentNode.rightChild;

        currentNode.rightChild = newRoot.leftChild;
        newRoot.leftChild = currentNode;
        // reset height
        calculateHeight(currentNode);
        calculateHeight(newRoot);
        return newRoot;
    }
    private AVLNode rotateRight(AVLNode currentNode) {
        AVLNode newRoot = currentNode.leftChild;

        currentNode.leftChild = newRoot.rightChild;
        newRoot.rightChild = currentNode;

        calculateHeight(newRoot);
        calculateHeight(currentNode);
        return newRoot;
    }
}
