package DataStructures.src.Arrays;

public class Array {
    private int[] items;
    private int count;

    public Array(int length){
        items = new int[length];
    }

    public void print(){
        for (int i = 0; i < count ; i++) {
            System.out.println(items[i]);
        }
    }
    public void insert(int item){
        // If full array, resize
        if (count == items.length) {
            int[] newItems = new int[count * 2];
            for (int i = 0; i < count; i++){
                newItems[i] = items[i];
            }
            items = newItems;
        }

        items[count++] = item;
    }

    public void removeAt(int index){
        if ( index < 0 || index >= count) {
            throw new IllegalArgumentException("Index out of bounds");
        }

        for (int i = index; i < count; i++) {
            items[i] = items[i + 1];
        }
        count--;
    }

    public void indexOf(int item){
        for (int i = 0; i < count; i++) {
            if (items[i] == item) {
                System.out.println(i);
                break;
            }
            if (i == count - 1){
                System.out.println(-1);
            }
        }
    }

    public void max(){
        int max = -999;
        for (int i = 0; i < count; i++) {
            if (max < items[i]) max = items[i];
        }
        System.out.println(max);
    }

    public void intersect(Array numbers){
        for (int i = 0; i < count; i++) {
            for (int number : numbers.getItems()) {
                if (items[i] == number) {
                    System.out.println(items[i]);
                }
            }
        }
    }

    public void reverse() {
        int[] reversed = new int[count];
        for (int i = 0, j = count - 1; i < count; i++, j--) {
            reversed[i] = items[j];
        }
        items = reversed;
    }

    public void insertAt(int item, int index) {
        if (index < 0 || index > count) throw new IllegalArgumentException("Index out of bounds");

        // If array full, resize
        if (count == items.length) {
            int[] newItems = new int[count * 2];
            for (int i = 0; i < count; i++){
                newItems[i] = items[i];
            }
            items = newItems;
        }

        count++;
        for (int i = count - 1; i > index; i--) {
            items[i] = items[i - 1];
        }
        items[index] = item;
    }

    public int getCount(){
        return this.count;
    }

    public int[] getItems(){
        return this.items;
    }
}
