package com.cliff.Heaps;

import java.util.Arrays;

public class Heap {
    private int[] heap;
    private int count = 0;

    public Heap(int size) {
        heap = new int[size];
    }

    public void insert(int value) {
        if (count == heap.length) {
            int[] temp = new int[heap.length * 2];
            System.arraycopy(heap, 0, temp, 0, count);
            heap = temp;
        }

        heap[count++] = value;
        bubbleUp();
    }

    public int remove() {
        int root = heap[0];
        heap[0] = heap[--count];
        bubbleDown();
        return root;
    }

    public boolean isEmpty() {
        return count == 0;
    }

    private void bubbleDown() {
        int parentIndex = 0;
        int leftChildIndex = 1;
        int rightChildIndex = 2;
        while (count >= rightChildIndex && (heap[parentIndex] < heap[leftChildIndex] || heap[parentIndex] < heap[rightChildIndex])) {
            int temp = heap[parentIndex];
            int largerChildIndex = heap[leftChildIndex] > heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
            heap[parentIndex] = heap[largerChildIndex];
            heap[largerChildIndex] = temp;

            parentIndex = largerChildIndex;
            leftChildIndex = parentIndex * 2 + 1;
            rightChildIndex = parentIndex * 2 + 2;
        }
    }
    private void bubbleUp() {
        int newItemIndex = count - 1;
        while (getParentIndex(newItemIndex) > -1 && heap[getParentIndex(newItemIndex)] < heap[newItemIndex]) {
            int temp = heap[getParentIndex(newItemIndex)];
            heap[getParentIndex(newItemIndex)] = heap[newItemIndex];
            heap[newItemIndex] = temp;
            newItemIndex = getParentIndex(newItemIndex);
        }
    }
    private static int getParentIndex(int newItemIndex) {
        return (newItemIndex - 1) / 2;
    }

    @Override
    public String toString() {
        int[] temp = new int[count];
        System.arraycopy(heap, 0, temp, 0, count);
        return Arrays.toString(temp);
    }
}
