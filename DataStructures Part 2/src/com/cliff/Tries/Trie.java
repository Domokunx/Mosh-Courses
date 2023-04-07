package com.cliff.Tries;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Trie {
    private class Node {
        private char ch;
        private HashMap<Character, Node> children = new HashMap<>();
        private boolean isEndOfWord = false;

        public Node (char ch) {
            this.ch = ch;
        }

        public boolean hasChild(char ch) {
            return children.containsKey(ch);
        }

        public boolean hasChildren() {
            return !children.isEmpty();
        }

        public void addChild(char ch) {
            children.put(ch, new Node(ch));
        }

        public void removeChild(char ch) {
            children.remove(ch);
        }

        public Node getChild(char ch) {
            return children.get(ch);
        }

        public Node[] getChildren() {
            return children.values().toArray(new Node[0]);
        }

        @Override
        public String toString() {
            return Character.toString(ch);
        }
    }

    private Node root = new Node(' ');

    public void insert(String word) {
        Node currentNode = root;
        for (char ch : word.toCharArray()) {
            if (!currentNode.hasChild(ch)) {
                currentNode.addChild(ch);
            }
            currentNode = currentNode.getChild(ch);
        }
        currentNode.isEndOfWord = true;
    }

    public boolean contains(String word) {
        if (word == null) throw new IllegalArgumentException("plz use normal words that is not null");
        word = word.trim();
        Node currentNode = root;
        for (char ch : word.toCharArray()) {
            if (!currentNode.hasChild(ch))
                return false;
            currentNode = currentNode.getChild(ch);
        }
        return currentNode.isEndOfWord;
    }

    public void delete(String word) {
        if (word == null) return;
        delete(root, word, 0);
    }
    private void delete(Node currentNode, String word, int index) {
        if (index == word.length()) {
            currentNode.isEndOfWord = false;
            return;
        }

        char ch = word.charAt(index);
        Node child = currentNode.getChild(ch);
        if (child == null) return;
        delete(child, word, index + 1);

        if (!child.hasChildren() && !child.isEndOfWord)
            currentNode.removeChild(ch);
    }

    public List<String> autoComplete(String prefix) {
        if (prefix == null) return null;

        List<String> words = new ArrayList<String>();
        Node currentNode = getLastNodeOf(prefix);
        if (currentNode == null) return null;
        autoComplete(words, currentNode, prefix);
        return words;
    }
    private Node getLastNodeOf(String prefix) {
        Node currentNode = root;
        for (char ch : prefix.toCharArray()) {
            currentNode = currentNode.getChild(ch);
        }
        return currentNode;
    }
    private void autoComplete(List<String> words, Node currentNode, String word) {
        if (currentNode.isEndOfWord)
            words.add(word);

        for (Node child : currentNode.getChildren()) {
            autoComplete(words, child, word + child);
        }
    }

    public boolean containsRecursive(String word) {
        return containsRecursive(word, root, 0);
    }
    private boolean containsRecursive(String word, Node currentNode, int index) {
        if (index == word.length())
            return currentNode.isEndOfWord;

        char ch = word.charAt(index);
        Node child = currentNode.getChild(ch);
        if (child == null)
            return false;

        return containsRecursive(word, child, index + 1);
    }

    public int countWords() {
        return autoComplete("").size();
    }

    // Add the words into a trie, walk down the trie until it has more than 1 child/deviates
    public String longestCommonPrefix(String[] words) {
        String prefix = "";
        Trie trie = new Trie();
        int shortestWordLength = Integer.MAX_VALUE;
        for (String word : words) {
            trie.insert(word);
            if (word.length() < shortestWordLength)
                shortestWordLength = word.length();
        }
        Node currentNode = trie.root;
        Node[] children = currentNode.getChildren();
        while (children.length == 1) {
            currentNode = children[0];
            prefix += currentNode;
            children = currentNode.getChildren();
        }
        return prefix.length() > shortestWordLength ? prefix.substring(0, shortestWordLength) : prefix;
    }

    public void preOrderTraversal() {
        preOrderTraversal(root);
    }
    private void preOrderTraversal(Node currentNode) {
        System.out.println(currentNode);
        for (Node child : currentNode.getChildren()) {
            preOrderTraversal(child);
        }
    }

    public void postOrderTraversal() {
        postOrderTraversal(root);
    }
    private void postOrderTraversal(Node currentNode) {
        for (Node child : currentNode.getChildren()) {
            postOrderTraversal(child);
        }
        System.out.println(currentNode);
    }
}
