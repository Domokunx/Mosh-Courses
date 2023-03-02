package DataStructures.src.HashTables;

import java.util.LinkedList;

public class HashTable {
    private class Entry {
        private int key;
        private String value;

        private Entry(int key, String value) {
            this.key = key;
            this.value = value;
        }
    }

    // HastTable
    private LinkedList<Entry>[] entries = new LinkedList[5];

    // put (k, v)
    public void put(int key, String value) {
        createList(key);
        var list = getEntries(key);

        // If duplicate key, update entry
        for (var e : list) {
            if (e.key == key) {
                e.value = value;
                return;
            }
        }

        list.add(new Entry(key, value));
    }


    // get (k) -> v
    public String get(int key) {
        var entry = getEntry(key);
        return entry == null ? null : entry.value;
    }

    // remove (k)
    public void remove(int key) {
        var entry = getEntry(key);
        var list = getEntries(key);

        if (entry == null)
            throw new IllegalStateException("Entry does not exist");
        list.remove(entry);
    }
    private int hash(int key) {
        return key % entries.length;
    }

    private Entry getEntry(int key) {
        LinkedList<Entry> list = getEntries(key);

        if (list != null) {
            for (var e : list) {
                if (e.key == key)
                    return e;
            }
        }
        return null;
    }

    private LinkedList<Entry> getEntries(int key) {
        int arrayIndex = hash(key);
        return entries[arrayIndex];
    }

    private void createList(int key) {
        int arrayIndex = hash(key);
        if (entries[arrayIndex] == null)
            entries[arrayIndex] = new LinkedList<Entry>();
    }
    // k : int
    // v : String
    // Collisions: Chaining (LinkedList)
}
