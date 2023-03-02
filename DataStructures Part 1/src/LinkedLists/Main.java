package DataStructures.src.LinkedLists;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        var list = new LinkedList();
        list.addFirst(4);
        list.addLast(8);
        list.addLast(12);
        list.reverse();

        System.out.println(list);
        System.out.println(list.KthNodeFromtheEnd(1));
    }
}
