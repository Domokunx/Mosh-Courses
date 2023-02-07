import java.util.*;
import java.awt.*;
public class Main {
    public static void main(String[] args) {
        byte myAge = 127;
        long viewCount = 3_123_456_789L; // L as a suffix as compiler sees it as integer
        float price = 12.99F;
        System.out.println(price);


        Date now = new Date(); // Instance of the date class (object)
        System.out.println(now);

        Point p1 = new Point(1,2);
        Point p2 = p1;
        p1.x = 4;
        System.out.println(p1);
        System.out.println(p2);

        // Strings
        String message = "Hello \tWorld\"" + "!!"; //REMEMBER: Strings are reference types (and immutable)
        System.out.println(message.replace("!", "*"));

        // Arrays
        int[] numbers = { 2, 3 ,5 ,1 ,4 };
        Arrays.sort(numbers);
        System.out.println(Arrays.toString(numbers));

        // 2D Arrays
        int[][] numbers2D = { {1, 2, 3}, {4, 5, 6} };
        System.out.println(Arrays.deepToString(numbers2D));

        // Constants (final) cannot be reassigned
        final float pi = 3.14F;

        // Arithmetic
        double result = (double)1 / 7; // One of the numbers need to be a double to get a double as result
        System.out.println(result);

        // Casting
        byte x = 1;
        int y = x + 2;
        System.out.println(y); // Implicit Casting: byte > short > int > long > float > double

        // Reading User inputs (scanner Object)
        Scanner scanner = new Scanner(System.in);
        System.out.print("Name: ");
        String name = scanner.nextLine().trim();
        System.out.println("You are " + name);
    }
}