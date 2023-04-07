package com.cliff.Tries;

public class Main {
    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insert("car");
        trie.insert("card");
        trie.insert("egg");
        trie.insert("canada");
        trie.insert("care");
        trie.insert("cargo");
        System.out.println(trie.autoComplete("e"));
        System.out.println(trie.countWords());
        System.out.println(trie.containsRecursive("cared"));
        String[] words = { "car", "card", "echo" };
        System.out.println(trie.longestCommonPrefix(words));
    }
}
