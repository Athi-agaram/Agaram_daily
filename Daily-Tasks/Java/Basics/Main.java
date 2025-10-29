import java.util.*;

public class Main {
    public static void main(String[] args) {

        List<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Mango");
        arrayList.add("Apple"); // duplicates allowed
        System.out.println( arrayList); // [Apple, Banana, Mango, Apple]
        System.out.println("Get index 1: " + arrayList.get(1)); // Banana
        arrayList.remove("Banana");
        System.out.println("After remove Banana: " + arrayList); // [Apple, Mango, Apple]

        // LinkedList as List
        List<Integer> linkedListAsList = new LinkedList<>();
        linkedListAsList.add(10);
        linkedListAsList.add(20);
        linkedListAsList.add(30);
        System.out.println("LinkedList as List: " + linkedListAsList); // [10, 20, 30]
        linkedListAsList.remove(1);
        System.out.println("After remove index 1: " + linkedListAsList); // [10, 30]

        Vector<String> vector = new Vector<>();
        vector.add("One");
        vector.add("Two");
        vector.add("Three");
        System.out.println("Vector: " + vector); // [One, Two, Three]

        Stack<String> stack = new Stack<>();
        stack.push("Java");
        stack.push("Python");
        stack.push("C++");
        System.out.println("Stack: " + stack); // [Java, Python, C++]
        System.out.println("Peek Stack: " + stack.peek()); // C++
        stack.pop();
        System.out.println("After pop: " + stack); // [Java, Python]

        Queue<String> queue = new LinkedList<>();
        queue.offer("Athi");
        queue.offer("John");
        queue.offer("Meera");
        System.out.println("Queue: " + queue); // [Athi, John, Meera]
        System.out.println("Peek Queue: " + queue.peek()); // Athi
        System.out.println("Poll Queue: " + queue.poll()); // Athi
        System.out.println("After poll: " + queue); // [John, Meera]

        // PriorityQueue
        Queue<Integer> pq = new PriorityQueue<>();
        pq.add(50);
        pq.add(10);
        pq.add(30);
        System.out.println("PriorityQueue: " + pq); // order not guaranteed, but poll gives min
        System.out.println("Poll PQ: " + pq.poll()); // 10
        System.out.println("After poll: " + pq); // [30,50] (remaining elements)

        // ArrayDeque as Deque
        Deque<String> deque = new ArrayDeque<>();
        deque.addFirst("Front");
        deque.addLast("Back");
        deque.add("Middle"); // adds to end by default
        System.out.println("Deque: " + deque); // [Front, Middle, Back]
        deque.removeFirst();
        deque.removeLast();
        System.out.println("After removing ends: " + deque); // [Middle]

         // HashSet
        HashSet<String> hs = new HashSet<>();
        hs.add("Apple");
        hs.add("Banana");
        hs.add("Mango");
        hs.add("Apple"); // duplicate ignored
        System.out.println("HashSet: " + hs); // order not guaranteed
        hs.remove("Banana");
        System.out.println("After remove Banana: " + hs); // [Mango, Apple]

        // LinkedHashSet
        LinkedHashSet<String> lhs = new LinkedHashSet<>();
        lhs.add("Apple");
        lhs.add("Banana");
        lhs.add("Mango");
        lhs.add("Apple"); // duplicate ignored
        System.out.println("LinkedHashSet: " + lhs); // [Apple, Banana, Mango] insertion order

        // TreeSet
        TreeSet<Integer> ts = new TreeSet<>();
        ts.add(40);
        ts.add(10);
        ts.add(20);
        ts.add(30);
        System.out.println("TreeSet: " + ts); // [10,20,30,40]
        System.out.println("First: " + ts.first()); // 10
        System.out.println("Last: " + ts.last()); // 40
        System.out.println("HeadSet(30): " + ts.headSet(30)); // [10,20]
        System.out.println("TailSet(25): " + ts.tailSet(25)); // [30,40]
        System.out.println("SubSet(20,35): " + ts.subSet(20,35)); // [20,30]
        System.out.println("Ceiling(26): " + ts.ceiling(26)); // 30
        System.out.println("Floor(26): " + ts.floor(26)); // 25
        System.out.println("Higher(25): " + ts.higher(25)); // 30
        System.out.println("Lower(25): " + ts.lower(25)); // 20
        System.out.println("PollFirst(): " + ts.pollFirst()); // 10
        System.out.println("After PollFirst: " + ts); // [20,30,40]
        System.out.println("PollLast(): " + ts.pollLast()); // 40
        System.out.println("After PollLast: " + ts); // [20,30]

        HashMap<String, Integer> hashMap = new HashMap<>();
        hashMap.put("Athi", 25);
        hashMap.put("John", 30);
        hashMap.put("Meera", 28);
        hashMap.put("John", 35); // updates value for key "John"
        System.out.println("HashMap: " + hashMap); 
        // Output: order not guaranteed, e.g., {Meera=28, John=35, Athi=25}

        // get()
        System.out.println("Get John: " + hashMap.get("John")); // 35

        // containsKey / containsValue
        System.out.println("Contains key Meera? " + hashMap.containsKey("Meera")); // true
        System.out.println("Contains value 25? " + hashMap.containsValue(25)); // true

        // remove()
        hashMap.remove("Athi");
        System.out.println("After remove Athi: " + hashMap); // {Meera=28, John=35}

        // size / isEmpty
        System.out.println("Size: " + hashMap.size()); // 2
        System.out.println("Is empty? " + hashMap.isEmpty()); // false

        // keySet / values / entrySet
        System.out.println("Keys: " + hashMap.keySet()); // [Meera, John]
        System.out.println("Values: " + hashMap.values()); // [28, 35]
        System.out.println("Entries:");
        for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
            System.out.println(entry.getKey() + " = " + entry.getValue());
        }

        // getOrDefault / replace
        System.out.println("Get or default (Peter): " + hashMap.getOrDefault("Peter", 0)); // 0
        hashMap.replace("Meera", 28, 29);
        System.out.println("After replace Meera: " + hashMap); // {Meera=29, John=35}


        LinkedHashMap<String, Integer> linkedHashMap = new LinkedHashMap<>();
        linkedHashMap.put("A", 1);
        linkedHashMap.put("B", 2);
        linkedHashMap.put("C", 3);
        linkedHashMap.put("B", 20); // updates value
        System.out.println("LinkedHashMap: " + linkedHashMap); 
        // Output: insertion order maintained: {A=1, B=20, C=3}

        // iteration (same as HashMap)
        System.out.println("Entries:");
        for (Map.Entry<String, Integer> entry : linkedHashMap.entrySet()) {
            System.out.println(entry.getKey() + " = " + entry.getValue());
        }

        TreeMap<Integer, String> treeMap = new TreeMap<>();
        treeMap.put(50, "Java");
        treeMap.put(20, "Python");
        treeMap.put(40, "C++");
        treeMap.put(10, "JS");
        System.out.println("TreeMap: " + treeMap); 
        // Output: sorted by key: {10=JS, 20=Python, 40=C++, 50=Java}

        // firstKey / lastKey
        System.out.println("First key: " + treeMap.firstKey()); // 10
        System.out.println("Last key: " + treeMap.lastKey()); // 50

        // headMap / tailMap / subMap
        System.out.println("headMap(40): " + treeMap.headMap(40)); // {10=JS, 20=Python}
        System.out.println("tailMap(20): " + treeMap.tailMap(20)); // {20=Python, 40=C++, 50=Java}
        System.out.println("subMap(20,50): " + treeMap.subMap(20,50)); // {20=Python, 40=C++}

        // ceilingKey / floorKey / higherKey / lowerKey
        System.out.println("Ceiling key 25: " + treeMap.ceilingKey(25)); // 40
        System.out.println("Floor key 25: " + treeMap.floorKey(25)); // 20
        System.out.println("Higher key 40: " + treeMap.higherKey(40)); // 50
        System.out.println("Lower key 40: " + treeMap.lowerKey(40)); // 20

        // pollFirstEntry / pollLastEntry
        System.out.println("Poll first entry: " + treeMap.pollFirstEntry()); // 10=JS
        System.out.println("After pollFirst: " + treeMap); // {20=Python, 40=C++, 50=Java}
        System.out.println("Poll last entry: " + treeMap.pollLastEntry()); // 50=Java
        System.out.println("After pollLast: " + treeMap); // {20=Python, 40=C++}


        Hashtable<String, String> hashtable = new Hashtable<>();
        hashtable.put("Athi", "25");
        hashtable.put("John", "30");
        hashtable.put("Meera", "28");
        System.out.println("Hashtable: " + hashtable); // order not guaranteed

        // get / containsKey / containsValue
        System.out.println("Get John: " + hashtable.get("John")); // 30
        System.out.println("Contains key Meera? " + hashtable.containsKey("Meera")); // true
        System.out.println("Contains value 28? " + hashtable.containsValue("28")); // true

        // remove / size / isEmpty
        hashtable.remove("Athi");
        System.out.println("After remove Athi: " + hashtable);
        System.out.println("Size: " + hashtable.size()); // 2
        System.out.println("Is empty? " + hashtable.isEmpty()); // false

        // keySet / values / entrySet
        System.out.println("Keys: " + hashtable.keySet());
        System.out.println("Values: " + hashtable.values());
        System.out.println("Entries:");
        for (Map.Entry<String, String> entry : hashtable.entrySet()) {
            System.out.println(entry.getKey() + " = " + entry.getValue());
        }
    }
}
