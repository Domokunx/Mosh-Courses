package DataStructures.src.Stacks;


public class Stack {
    private int[] stack;
    private int count = 0;

    public Stack(int size) {
        this.stack = new int[size];
    }

    //push
    public void push(int value) {
        //array full, throw error
        if (count == stack.length)
            throw new StackOverflowError("Stack overflow");

        stack[count++] = value;
    }
    //pop
    public int pop() {
        if (isEmpty()) throw new IllegalStateException("stack is empty");

        int popped = stack[--count];
        stack[count] = 0;
        return popped;
    }
    //peek
    public int peek() {
        if (isEmpty()) throw new IllegalStateException("stack is empty");

        return stack[count - 1];
    }
    //isEmpty
    public boolean isEmpty() {
        return (count == 0);
    }

    @Override
    public String toString() {
        String stack = "[";
        for (int i = 0; i < count; i++){
            stack += Integer.toString(this.stack[i]);
            if (i + 1 < count) stack += ",";
        }
        return stack + "]";
    }
}
