package com.cliff.BST;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Tree BST = new Tree();
        BST.insert(10);
        BST.insert(34);
        BST.insert(3);
        BST.insert(1);
        BST.insert(14);
        BST.insert(17);

        int[] nodes = BST.nodeKthDistanceFromRoot(1);
        System.out.println(Arrays.toString(nodes));
        System.out.println(BST.getSize());
        System.out.println(BST.countLeaves());
        System.out.println(BST.maxValue());
        System.out.println(BST.minValue());
        System.out.println(BST.contains(-1));
        System.out.println(BST.areSiblings(34, -3));
        System.out.println(BST.getAncestors(17));
        BST.traverseLevelOrder();
    }
}
