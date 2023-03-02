package DataStructures.src.Queues;

import java.util.Stack;

public class StackQueue {
    private Stack<Integer> stackIn = new Stack<>();
    private Stack<Integer> stackOut = new Stack<>();
    private int count = 0;

    //enq
    public void enqueue(int item) {
        stackIn.add(item);
        count++;
    }
    //deq
    public int dequeue() {
        if (count == 0) throw new IllegalStateException("Queue is empty");
        if (stackOut.isEmpty()){
            //stackIn[10, 20 ,30] => stackOut[30, 20, 10]
            while (!stackIn.isEmpty()) stackOut.add(stackIn.pop());
        }
        //pop() => stackOut[30, 20]
        int popped = stackOut.pop();
        count--;
        return popped;
        }
    //peek
    public int peek() {
        if (count == 0) throw new IllegalStateException("Queue is empty");
        if (stackOut.isEmpty()){
            while (!stackIn.isEmpty()) stackOut.add(stackIn.pop());
        }
        return stackOut.peek();
    }
    //isEmpty
    public boolean isEmpty() {
        return count == 0;
    }

    @Override
    public String toString() {
        if (count == 0) return "[]";
        if (stackIn.isEmpty()) {
            while (!stackOut.isEmpty()) stackIn.add(stackOut.pop());
        }
        return stackIn.toString();
    }
}
