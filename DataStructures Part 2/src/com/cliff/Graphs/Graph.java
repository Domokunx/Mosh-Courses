package com.cliff.Graphs;

import java.util.*;

public class Graph {
    private class Node {
        private String value;

        public Node(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return value;
        }
    }

    private int nodeCount = 0;
    private HashMap<Node, List<Node>> adjacencyList = new HashMap<>();
    private HashMap<String, Node> nodes = new HashMap<>();

    public void addNode(String value) {
        Node node = new Node(value);
        nodes.putIfAbsent(value, node);
        adjacencyList.putIfAbsent(node, new LinkedList<>());
    }

    public void removeNode(String value) {
        Node node = nodes.get(value);
        if (node == null)
            return;

        nodes.remove(value);
        adjacencyList.remove(node);
        for (Map.Entry<Node, List<Node>> e : adjacencyList.entrySet()) {
            e.getValue().remove(node);
        }
        nodeCount--;
    }

    public void addEdge (String from, String to) {
        Node fromNode = nodes.get(from);
        Node toNode = nodes.get(to);
        if (fromNode == null || toNode == null)
            throw new IllegalArgumentException("Vertex does not exist");

        adjacencyList.get(fromNode).add(toNode);
        // adjacencyList.get(toNode).add(fromNode); if undirected graph
    }

    public void removeEdge(String from, String to) {
        Node fromNode = nodes.get(from);
        Node toNode = nodes.get(to);
        if (fromNode == null || toNode == null)
            throw new IllegalArgumentException("Vertex does not exist");

        List<Node> list = adjacencyList.get(fromNode);
        list.remove(toNode);
    }

    public void printGraph() {
        if (nodes == null) throw new IllegalStateException("Empty graph");

        for (Map.Entry<String, Node> entry : nodes.entrySet()) {
            String vertex = entry.getKey();
            Node fromNode = entry.getValue();
            List<Node> list = adjacencyList.get(fromNode);
            if (list.isEmpty()) {
                System.out.println(vertex + " has no connections.");
                continue;
            }

            ArrayList<String> adjacentNodes = new ArrayList<>(list.size());
            for (Node node : list) {
                adjacentNodes.add(node.getValue());
            }
            System.out.println(vertex + " is connected to " + Arrays.toString(adjacentNodes.toArray()));
        }
    }

    public void DFS(String start) {
        Node node = nodes.get(start);
        if (node == null) throw new IllegalArgumentException("Vertex dont real");
        ArrayList<Node> output = new ArrayList<>(nodes.size());
        DFS(node, new HashSet<>(nodes.size()), output);
        System.out.println(Arrays.toString(output.toArray()));
    }
    private void DFS(Node currentNode, Set<Node> visited, ArrayList<Node> output) {
        visited.add(currentNode);
        output.add(currentNode);

        List<Node> neighbours = adjacencyList.get(currentNode);
        if (neighbours.isEmpty()) return;
        for (Node node : neighbours) {
            if (!visited.contains(node)) {
                DFS(node, visited, output);
            }
        }
    }

    public void DFS_Iterative(String start) {
        Node node = nodes.get(start);
        if (node == null) return;

        Set<Node> visited = new HashSet<>();
        Stack<Node> callStack = new Stack<>();
        callStack.push(node);

        while (!callStack.isEmpty()) {
            Node currentNode = callStack.pop();

            if (visited.contains(currentNode))
                continue;
            System.out.println(currentNode);
            visited.add(currentNode);

            for (Node neighbour : adjacencyList.get(currentNode)) {
                if (!visited.contains(neighbour))
                    callStack.push(neighbour);
            }
        }
    }

    public void BFS(String start) {
        Node node = nodes.get(start);
        if (node == null) return;
        HashSet<Node> visited = new HashSet<>(nodes.size());
        ArrayList<Node> output = new ArrayList<>(nodes.size());
        ArrayDeque<Node> queue = new ArrayDeque<>(nodes.size());
        BFS(node, visited, queue, output);
        System.out.println(Arrays.toString(output.toArray()));
    }
    private void BFS(Node currentNode, HashSet<Node> visited, ArrayDeque<Node> queue, ArrayList<Node> output) {
        visited.add(currentNode);
        output.add(currentNode);
        queue.addAll(adjacencyList.get(currentNode));

        while (!queue.isEmpty()) {
            Node current = queue.remove();
            if (visited.contains(current))
                continue;
            BFS(current, visited, queue, output);
        }
    }

    // Only works on Directed Acyclic Graphs(DAG)
    public void topologicalSort() {
        Set<Node> visited = new HashSet<>(nodes.size());
        Stack<Node> stack = new Stack<>();

        for (Node node : nodes.values())
            topologicalSort(node, visited, stack);

        ArrayList<Node> output = new ArrayList<>();
        while (!stack.isEmpty())
            output.add(stack.pop());

        System.out.println(Arrays.toString(output.toArray()));
    }
    private void topologicalSort(Node currentNode, Set<Node> visited, Stack<Node> stack) {
        if (visited.contains(currentNode)) return;

        visited.add(currentNode);
        for (Node neighbour : adjacencyList.get(currentNode))
            topologicalSort(neighbour, visited, stack);

        stack.push(currentNode);
    }

    public boolean hasCycle() {
        Set<Node> visiting = new HashSet<>();
        Set<Node> visited = new HashSet<>();
        Set<Node> nodes = new HashSet<>(this.nodes.values());

        while (!nodes.isEmpty()) {
            Node currentNode = nodes.iterator().next();
            if (hasCycle(currentNode, visited, visiting, nodes))
                return true;
        }
        return false;
    }
    private boolean hasCycle(Node currentNode, Set<Node> visited, Set<Node> visiting, Set<Node> nodes) {
        nodes.remove(currentNode);
        visiting.add(currentNode);

        for (Node neighbour : adjacencyList.get(currentNode)) {
            if (visited.contains(neighbour))
                continue;

            if (visiting.contains(neighbour))
                return true;

            if (hasCycle(neighbour, visited, visiting, nodes))
                return true;
        }
        visited.add(currentNode);
        visiting.remove(currentNode);
        return false;
    }
}
