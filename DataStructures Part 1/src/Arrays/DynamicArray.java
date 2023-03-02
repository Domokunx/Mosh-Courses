package DataStructures.src.Arrays;

import java.util.ArrayList;

public class DynamicArray {
    public static void main(String[] args) {
        // 2 Types
        // Vector - Synchronous (grows 100% when overflow)
        // ArrayList - Asynchronous (grows 50% when overflow)

        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(20);
        list.remove(1);
        System.out.println(list);
    }
}
