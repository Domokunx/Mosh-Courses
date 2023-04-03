package com.cliff.Heaps;

public class MinHeap {
    public class Node {
        private int key;
        private String value;

        public Node(int key, String value) {
            this.key = key;
            this.value = value;
        }

        @Override
        public String toString() {
            return value;
        }
    }

    private Node[] Nodes;
    private int count = 0;

    public MinHeap(int size) {
        this.Nodes = new Node[size];
    }

    public void insert(Node node) {
        if (count == Nodes.length) {
            Node[] temp = new Node[Nodes.length * 2];
            System.arraycopy(Nodes, 0, temp, 0, count);
            Nodes = temp;
        }

        Nodes[count++] = node;
        bubbleUp();
    }

    public void remove() {

    }

    private void bubbleUp() {
        int itemIndex = count - 1;
        int parentIndex = (itemIndex - 1) / 2;
        while (parentIndex >= 0 && Nodes[itemIndex].key > Nodes[parentIndex].key) {
            Node temp = Nodes[parentIndex];
            Nodes[parentIndex] = Nodes[itemIndex];
            Nodes[itemIndex] = temp;

            itemIndex = parentIndex;
            parentIndex = (itemIndex - 1) / 2;
        }
    }
}
