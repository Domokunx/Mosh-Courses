package DataStructures.src.Stacks;

import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class Balanced {

    private static final List<Character> leftBrackets = Arrays.asList('(', '[', '<', '}');
    private static final List<Character> rightBrackets = Arrays.asList(')', ']', '>', '}');

    public static boolean solution(String str){
        Stack<Character> stack = new Stack<>();

        for (char c : str.toCharArray()){
            if (!(isLeftBracket(c) || isRightBracket(c))) continue;

            if (isLeftBracket(c)){
                stack.push(c);
                continue;
            }

            if (isRightBracket(c)){
                if (stack.empty()) return false;
                if (!bracketsMatch(stack.pop(), c)) return false;
            }
        }
        return stack.empty();
    }

    private static boolean isLeftBracket(char c){
        return leftBrackets.contains(c);
    }

    private static boolean isRightBracket(char c){
        return rightBrackets.contains(c);
    }

    private static boolean bracketsMatch(char left, char right){
        return leftBrackets.indexOf(left) == rightBrackets.indexOf(right);
    }
}
