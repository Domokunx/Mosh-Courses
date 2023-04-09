package com.cliff.WeightedGraphs;

public class Main {
    public static void main(String[] args) {
        WeightedGraph graph = new WeightedGraph();
        graph.addNode("A");
        graph.addNode("B");
        graph.addNode("C");
        graph.addNode("D");
        graph.addEdge("A", "B", 3);
        graph.addEdge("B", "C", 2);
        graph.printGraph();
        System.out.println(graph.shortestPathBetween("A", "C"));
        System.out.println(graph.hasCycle());

        // Prim's Algorithm (Minimum spanning Tree)
        WeightedGraph graph2 = new WeightedGraph();
        graph2.addNode("A");
        graph2.addNode("B");
        graph2.addNode("C");
        graph2.addNode("D");
        graph2.addEdge("A", "B", 3);
        graph2.addEdge("A", "C", 1);
        graph2.addEdge("C", "B", 2);
        graph2.addEdge("C", "D", 5);
        graph2.addEdge("D", "B", 4);
        WeightedGraph minimumSpanningTree = graph2.createMinimumSpanningTree();
        minimumSpanningTree.printGraph();
    }
}
