package com.cliff.BST;

public class Main {
    public static void main(String[] args) {
        Tree BST = new Tree();
        BST.insert(10);
        BST.insert(34);
        BST.insert(3);
        BST.insert(1);
        BST.insert(14);
        BST.insert(17);

        Tree BST2 = new Tree();
        BST2.insert(10);
        BST2.insert(34);
        BST2.insert(3);
        BST2.insert(1);
        BST2.insert(14);
        BST2.insert(17);
        System.out.println(BST.equal(BST2));
    }
}
