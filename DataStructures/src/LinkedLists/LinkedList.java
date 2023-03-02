package DataStructures.src.LinkedLists;

import java.util.Arrays;
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
    private int size = 0;

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
        size++;
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
        size++;
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
            size--;
            return;
        }

        Node second = first.next;
        first.next = null;
        size--;
        first = second;
    }

    //deleteLast
    public void deleteLast() {
        // no item
        if (isEmpty()) {
            throw new NoSuchElementException("List is empty");
        }

        // 1 item
        if (first == last) {
            first = last = null;
            size--;
            return;
        }

        // More than 1 item
        Node newLast = first;
        while (newLast.next != last){
            newLast = newLast.next;
        }
        newLast.next = null;
        last = newLast;
        size--;
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

    public int size() {
        return size;
    }

    public int[] toArray() {
        int[] array = new int[size];
        Node current = first;
        int i = 0;
        while (current != null) {
            array[i++] = current.value;
            current = current.next;
        }
        return array;
    }

    public void reverse() {
        // No item or 1 item
        if (isEmpty() || first == last) return;

        Node current = first.next;
        Node previous = first;

        while  (current != null) {
            Node next = current.next;
            current.next = previous;

            previous = current;
            current = next;
        }

        first.next = null;
        last = first;
        first = previous;
    }

    public Node KthNodeFromtheEnd(int nodeFromEnd){
        if (isEmpty()) throw new IllegalStateException("Empty List");
        if (nodeFromEnd <= 0 || nodeFromEnd > size) throw new IllegalArgumentException("Not within List Range");

        Node resultPtr = first;
        int nodesToTraverse =  size - nodeFromEnd;

        while (nodesToTraverse > 0) {
            resultPtr = resultPtr.next;
            nodesToTraverse--;
        }
        return resultPtr;
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


