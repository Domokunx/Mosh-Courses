package DataStructures.src.LinkedLists;

public class Main {
    public static void main(String[] args) {
        var list = new LinkedList();
        list.addLast(4);
        list.addLast(8);
        list.addLast(12);
        System.out.println(list.contains(12));

        System.out.println(list);
    }
}
