package com.cliff.Heaps;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numbers = { 5, 3, 8, 4, 1, 2, 12 ,29, 10, 100 , 2000, 25, 30 };

        heapSort(numbers); // Descending

        heapify(numbers); // Common interview Qn, make an array conform to heap properties
        System.out.println(Arrays.toString(numbers));

        System.out.println(KthLargestValue(numbers, 2));
    }

    private static void heapSort(int[] numbers) {
        Heap heap = new Heap(6);
        for (int number : numbers) {
            heap.insert(number);
        }
        while (!heap.isEmpty()) {
            System.out.println(heap.remove());
        }
    }

    private static void heapify(int[] numbers) {
        for (int i = numbers.length / 2 - 1; i >= 0; i--) {
            heapify(numbers, i);
        }
    }
    private static void heapify(int[] numbers, int parentIndex) {
        int leftChildIndex = parentIndex * 2 + 1;
        int rightChildIndex = parentIndex * 2 + 2;

        while (numbers.length > rightChildIndex && (numbers[leftChildIndex] > numbers[parentIndex] || numbers[rightChildIndex] > numbers[parentIndex])) {
            int largerChildIndex = numbers[leftChildIndex] > numbers[rightChildIndex] ? leftChildIndex : rightChildIndex;
            int temp = numbers[parentIndex];
            numbers[parentIndex] = numbers[largerChildIndex];
            numbers[largerChildIndex] = temp;

            heapify(numbers, largerChildIndex);
        }
    }

    private static int KthLargestValue(int[] numbers, int K) {
        if (K < 1 || K > numbers.length) throw new IllegalArgumentException("Not within array");

        Heap heap = new Heap(numbers.length);
        for (int number : numbers) {
            heap.insert(number);
        }
        for (int i = 1; i < K; i++) {
            heap.remove();
        }
        return heap.remove();
    }

    private static boolean isMaxHeap(int[] numbers) {
        for (int i = 0; i < numbers.length / 2 - 1; i++) {
            int leftChildIndex = i * 2 + 1;
            int rightChildIndex = i * 2 + 2;
            if (numbers[i] < numbers[leftChildIndex] || numbers[i] < numbers[rightChildIndex]) {
                return false;
            }
        }
        return true;
    }
}
