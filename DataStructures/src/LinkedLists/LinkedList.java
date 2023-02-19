package DataStructures.src.LinkedLists;

import java.util.NoSuchElementException;

public class LinkedList {
    private class Node {
        private int value;
        private Node next = null;

        public Node(int value){
            this.value = value;
        }
    }

    private Node first;
    private Node last;

    //addFirst
    public void addFirst(int value){
        var node = new Node(value);
        if (isEmpty()) {
            first = last = node;
        }
        else {
            node.next = first;
            first = node;
        }
    }

    //addLast
    public void addLast(int value){
        var node = new Node(value);

        if (isEmpty()) {
            first = last = node;
        }
        else {
            last.next = node;
            last = node;
        }
    }

    //deleteFirst
    public void deleteFirst() {
        // no item
        if (isEmpty()) {
            throw new NoSuchElementException("List is empty");
        }

        // only 1 item
        if (first == last) {
            first = last = null;
            return;
        }

        Node second = first.next;
        first.next = null;
        first = second;
    }

    //deleteLast
    public void deleteLast() {
        Node node = first;
        while (node.next != last){
            node = node.next;
        }
        last = node;
        node.next = null;
    }

    //contains
    public boolean contains(int value){
        if (indexOf(value) != -1) return true;
        return false;
    }

    //indexOf
    public int indexOf(int value){
        Node node = first;
        int index = 0;
        while (node != null) {
            if (node.value == value) return index;
            node = node.next;
            index++;
        }
        return -1;
    }

    private boolean isEmpty() {
        return first == null;
    }

    @Override
    public String toString() {
        Node node = first;
        String values = "[";
        while (node != null){
            values += node.value;
            if (node.next != null) values += ", ";
            node = node.next;
        }
        return values + "]";
    }
}


