package com.cliff.Heaps;

public class HeapPriorityQueue {
    private Heap heap = new Heap(5);

    public void add(int item) {
        heap.insert(item);
    }
    public int remove() {
        return heap.remove();
    }
    public boolean isEmpty() {
        return heap.isEmpty();
    }
}
