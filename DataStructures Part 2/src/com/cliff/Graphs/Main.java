package com.cliff.Graphs;

public class Main {
    public static void main(String[] args) {
        Graph graph = new Graph();

        graph.addNode("A");
        graph.addNode("B");
        graph.addNode("C");
        graph.addNode("D");
        graph.addNode("E");

        graph.addEdge("C", "A");
        graph.addEdge("C", "B");
        graph.addEdge("C", "D");
        graph.addEdge("A", "B");
        graph.addEdge("A", "E");
        graph.addEdge("B", "E");
        graph.addEdge("D", "E");

        graph.printGraph();
        graph.DFS("C");
        graph.BFS("C");
        graph.topologicalSort();

        Graph DAG = new Graph();
        DAG.addNode("0");
        DAG.addNode("1");
        DAG.addNode("2");
        DAG.addNode("3");
        DAG.addNode("4");
        DAG.addNode("5");

        DAG.addEdge("5", "0");
        DAG.addEdge("5", "2");
        DAG.addEdge("4", "0");
        DAG.addEdge("4", "1");
        DAG.addEdge("2", "3");
        DAG.addEdge("3", "1");

        DAG.topologicalSort();
        System.out.println(DAG.hasCycle());
    }
}
