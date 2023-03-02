package DataStructures.src.Queues;

import java.util.Arrays;
import java.util.Stack;

public class ArrayPriorityQueue {
    private int[] queue;
    private int count;
    private int ptrOut = 0;


    public ArrayPriorityQueue(int capacity) {
        this.queue = new int[capacity];
    }

    public void insert(int value){
        if (count == queue.length) {
            queue = Arrays.copyOf(queue, queue.length * 2);
        }

        if (shiftItems(value)) return;

        queue[count++] = value;
    }

    private boolean shiftItems(int value) {
        for (int i = 0; i < count; i++) {
            if (value <= queue[i]) {
                for (int j = count; j >= i; j--) {
                    queue[j] = queue[j - 1];
                }
                queue[i] = value;
                count++;
                return true;
            }
        }
        return false;
    }

    public int remove() {
        if (isEmpty()) throw new IllegalStateException("Queue empty la sial");

        // if smaller number is higher priority
        ptrOut %= queue.length;
        int item = queue[ptrOut];
        queue[ptrOut++] = 0;
        return item;

        // if larger number is higher priority
        // return queue[--count];
    }

    public boolean isEmpty() {
        return count == 0;
    }

    public void reverseFirstKElements(int K) {
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < K; i++) {
            stack.push(queue[i]);
        }

        for (int i = 0; i < K; i++) {
            queue[i] = stack.pop();
        }
    }

    @Override
    public String toString() {
        return Arrays.toString(queue);
    }
}
