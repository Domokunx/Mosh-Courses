package com.cliff.AVL;

public class Main {
    public static void main(String[] args) {
        AVLTree AVL = new AVLTree();
        AVL.insert(10);
        AVL.insert(20);
        AVL.insert(30);
        System.out.println(AVL.size());
        System.out.println(AVL.isPerfect());
    }
}
