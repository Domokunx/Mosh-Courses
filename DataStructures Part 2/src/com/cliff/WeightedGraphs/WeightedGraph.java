package com.cliff.WeightedGraphs;

import java.util.*;

public class WeightedGraph {
    private class Node {
        private String value;
        private List<Edge> adjacencyList = new ArrayList<>();

        public Node(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        public List<Edge> getAdjacencyList() {
            return adjacencyList;
        }

        public void addEdge(Node to, int weight) {
            adjacencyList.add(new Edge(this, to, weight));
        }

        @Override
        public String toString() {
            return value;
        }
    }
    private class NodeEntry {
        private Node node;
        private int priority;


        private NodeEntry(Node node, int priority) {
            this.node = node;
            this.priority = priority;
        }
    }
    private class Edge {
        private int weight;
        private Node from;
        private Node to;

        public Edge(Node from, Node to, int weight) {
            this.from = from;
            this.to = to;
            this.weight = weight;
        }

        @Override
        public String toString() {
            return "[" + from + " <-> " + to + ", Weight: "+ weight + "]";
        }
    }

    private Map<String, Node> nodes = new HashMap<>();

    public void addNode(String value) {
        nodes.putIfAbsent(value, new Node(value));
    }

    public void addEdge(String from, String to, int weight) {
        Node fromNode = nodes.get(from);
        Node toNode = nodes.get(to);
        if (fromNode == null || toNode == null)
            throw new IllegalArgumentException("Nodes do not exist");

        fromNode.addEdge(toNode, weight);
        toNode.addEdge(fromNode, weight);
    }

    //Dijkstra's Algorithm
    public Path shortestPathBetween(String from, String to) {
        Node fromNode = nodes.get(from);
        Node toNode = nodes.get(to);
        if (fromNode == null || toNode == null)
            throw new IllegalArgumentException("Nodes do not exist");

        Set<Node> visited = new HashSet<>(nodes.size());
        Map<Node, Node> previousNode = new HashMap<>();
        Map<Node, Integer> shortestDistance = new HashMap<>();
        for (Node node : nodes.values())
            shortestDistance.put(node, Integer.MAX_VALUE);
        shortestDistance.replace(fromNode, 0);

        Queue<NodeEntry> callStack = new PriorityQueue<>(
                Comparator.comparingInt(ne -> ne.priority)
        );
        callStack.add(new NodeEntry(fromNode, 0));

        while (!callStack.isEmpty()) {
            Node currentNode = callStack.remove().node;
            visited.add(currentNode);
            for (Edge e : currentNode.getAdjacencyList()) {
                if (visited.contains(e.to))
                    continue;

                int newDistance = shortestDistance.get(currentNode) + e.weight;
                if (shortestDistance.get(e.to) > newDistance) {
                    shortestDistance.replace(e.to, newDistance);
                    previousNode.put(e.to, currentNode);
                    callStack.add(new NodeEntry(e.to, newDistance));
                }
            }
        }
        return buildPath(toNode, previousNode);
    }

    // Different from directed graph
    // In undirected graphs, 2 node can be considered a cycle,
    // and inherently if all nodes are connected (even indirectly),
    // they can be visited from any node
    // SO there is no need to check "if currently visiting" as you WILL visit every node in 1 cycle
    // Unlike directly graphs, where you might need to backtrack and revisit (and ignore) already visited nodes
    public boolean hasCycle() {
        Set<Node> visited = new HashSet<>(nodes.size());
        for (Node node : nodes.values()) {
            if (!visited.contains(node) && hasCycle(node, null, visited))
                return true;
        }
        return false;
    }
    private boolean hasCycle(Node currentNode, Node parent, Set<Node> visited) {
        visited.add(currentNode);

        for (Edge edges : currentNode.getAdjacencyList()) {
            Node neighbour = edges.to;
            if (neighbour == parent)
                continue;

            if (visited.contains(neighbour)) {
                return true;
            }

            if (hasCycle(neighbour, currentNode, visited))
                return true;
        }
        return false;
    }

    // Prim's Algorithm
    public WeightedGraph createMinimumSpanningTree() {
        WeightedGraph tree = new WeightedGraph();
        if (nodes.isEmpty())
            return tree;

        Node startNode = nodes.values().iterator().next();
        tree.addNode(startNode.getValue());

        Queue<Edge> edges = new PriorityQueue<>(
                Comparator.comparingInt(w -> w.weight)
        );
        edges.addAll(startNode.getAdjacencyList());

        while (this.nodes.size() != tree.nodes.size()) {
            if (edges.isEmpty())
                return tree;
            createMinimumSpanningTree(tree, edges);
        }
        return tree;
    }
    private void createMinimumSpanningTree(WeightedGraph tree, Queue<Edge> edges) {
        Edge smallestEdge = edges.remove();
        Node closestNode = smallestEdge.to;
        while (tree.nodes.containsKey(closestNode.getValue())) {
            smallestEdge = edges.remove();
            closestNode = smallestEdge.to;
        }

        tree.addNode(closestNode.getValue());
        tree.addEdge(smallestEdge.from.getValue(), smallestEdge.to.getValue(), smallestEdge.weight);
        for (Edge edge : closestNode.getAdjacencyList())
            if (!tree.nodes.containsKey(edge.to.getValue())) //Ignore edge if it revisits node in tree
                edges.add(edge);
    }

    public void printGraph() {
        if (nodes.isEmpty())
            return;

        for (Node node : nodes.values()) {
            List<Edge> list = node.getAdjacencyList();
            System.out.println(node + " has edges " + Arrays.toString(list.toArray()));
        }
    }

    private static Path buildPath(Node toNode, Map<Node, Node> previousNode) {
        Stack<Node> s = new Stack<>();
        s.add(toNode);
        Node previous = previousNode.get(toNode);
        while (previous != null) {
            s.push(previous);
            previous = previousNode.get(previous);
        }

        Path path = new Path();
        while (!s.isEmpty())
            path.addNode(s.pop().getValue());
        return path;
    }
}

