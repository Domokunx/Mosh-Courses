package DataStructures.src.HashTables;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        // Map is an Interface, HashMap is the class
//        Map<Integer, String> map = new HashMap<>();
//        map.put(1, "Cliff");
//        map.put(2, "Neleh");
//        map.put(3, "Denise");
//
//        System.out.println(map.get(3));
//        System.out.println(map.containsKey(3)); // O(1)
//        System.out.println(map.containsValue("Cliff")); // O(n) has to iterate, cannot use the hash function
//        System.out.println(map);
//
//        for (var item : map.entrySet()) {
//            System.out.println(item);
//        }
//
//        System.out.println(firstNonRepeatingChar("zaabbsdjsamc"));
//        System.out.println(firstRepeatingChar("azza"));

        var hashTable = new HashTable();
        hashTable.put(1, "Cliff");
        hashTable.put(1, "Ffilc");

        System.out.println(hashTable.get(1));
        System.out.println(mostRepeatedChar("oajsdandjjasklaksdlkaslka"));
    }

    private static char firstNonRepeatingChar(String str) {
        Map<Character, Integer> map = new HashMap<>();
        char[] chars = str.toCharArray();
        for (char currentChar : chars) {
            int currentCharCount = map.containsKey(currentChar) ? map.get(currentChar) : 0;
            map.put(currentChar, ++currentCharCount);
        }

        char answer = '-';
        for (char c : chars) {
            if (map.get(c) == 1) {
                answer = c;
                break;
            }

        }
        return answer;
    }

    private static char firstRepeatingChar(String str) {
        Set<Character> charSet = new HashSet<>();
        var chars = str.toCharArray();

        for (char c : chars) {
            if (charSet.contains(c)) return c;
            charSet.add(c);
        }
        return Character.MIN_VALUE;
    }

    private static char mostRepeatedChar(String str) {
        Map<Character, Integer> hashMap = new HashMap<>();


        for (char c : str.toCharArray()) {
            int count = hashMap.containsKey(c) ? hashMap.get(c) : 0;
            hashMap.put(c, ++count);
        }

        int highestCount = 0;
        char answer = Character.MIN_VALUE;
        for (char c : hashMap.keySet()) {
            if (highestCount < hashMap.get(c)) {
                answer = c;
                highestCount = hashMap.get(c);
            }
        }
        return answer;
    }

    private static int numberOfUniquePairWithDiff (int[] array, int diff) {

    }
}
