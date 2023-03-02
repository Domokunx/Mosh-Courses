package DataStructures.src.Queues;

import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        ArrayPriorityQueue pq = new ArrayPriorityQueue(5);
        pq.insert(1);
        pq.insert(5);
        pq.insert(4);
        pq.insert(4);
        pq.insert(6);
        pq.insert(3);
        pq.reverseFirstKElements(3);
        System.out.println(pq);
    }

    private static void reverse(Queue<Integer> queue) {
        if (queue.isEmpty()) throw new IllegalStateException("oi its empty");
        Stack<Integer> stack = new Stack<>();
        while (!queue.isEmpty()) {
            stack.push(queue.remove());
        }
        while (!stack.isEmpty())
            queue.add(stack.pop());
    }
}
