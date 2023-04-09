package com.cliff.WeightedGraphs;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Path {
    private List<String> path = new ArrayList<String>();

    public void addNode(String location) {
        path.add(location);
    }

    @Override
    public String toString() {
        return path.toString();
    }
}
