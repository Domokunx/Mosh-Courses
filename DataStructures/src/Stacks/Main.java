package DataStructures.src.Stacks;

public class Main {
    public static void main(String[] args) {
//        Stack<dataType> stack = new Stack<>();

        var stack = new Stack(5);
        stack.push(1);
        stack.push(15);
        stack.push(2);
        stack.pop();
        stack.pop();
        System.out.println(stack.peek());
        System.out.println(stack);
    }
}
