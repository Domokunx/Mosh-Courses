package DataStructures.src.Queues;

import java.util.Arrays;

public class ArrayQueue {
    private int[] queue;
    private int frontPtr = 0;
    private int backPtr = 0;
    private int count;

    public ArrayQueue(int size) {
        this.queue = new int[size];
    }

    //enqueue
    public void enqueue(int item){
        if (isFull()) throw new StackOverflowError("Queue is full oi");

        queue[backPtr] = item;
        backPtr = (backPtr + 1) % queue.length;
        count++;
    }
    //dequeue
    public int dequeue() {
        if (isEmpty()) throw new IllegalStateException("nothing in here boss");

        int item = queue[frontPtr];
        queue[frontPtr] = 0;
        frontPtr = (frontPtr + 1) % queue.length;
        count--;
        return item;
    }
    //peek
    public int peek() {
        if (isEmpty()) throw new IllegalStateException("Queue finish liao");
        return queue[frontPtr];
    }

    //isFull
    public boolean isFull() {
        return (count == queue.length);
    }

    //isEmpty
    public boolean isEmpty() {
        return (count == 0);
    }

    @Override
    public String toString() {
       return Arrays.toString(queue);
    }
}
