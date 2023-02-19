package DataStructures.src.Arrays;

public class Main {
    public static void main(String[] args){
        Array numbers = new Array(3);
        numbers.insert(1);
        numbers.insert(2);
        numbers.insert(3);

        numbers.insertAt(0,3);
        numbers.print();
    }
}

