package DataStructures.src.Stacks;

import java.util.Stack;

public class Reversing {
    public static void solution(String str){
        if (str == null) throw new IllegalArgumentException("oi");
        Stack<Character> stack = new Stack<>();

        for (char c : str.toCharArray()){
            stack.push(c);
        }

        StringBuffer ans = new StringBuffer();
        while (!stack.isEmpty()) ans.append(stack.pop());
        System.out.println(ans);
    }
}
