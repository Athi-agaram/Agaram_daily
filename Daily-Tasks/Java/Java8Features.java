import java.util.*;
import java.util.stream.*;

@FunctionalInterface
interface Greeting {
    void sayHello(String name);
}

public class Java8Features {

    public static void main(String[] args) {

        Greeting greet = (name) -> System.out.println("Hello, " + name + "!");
        greet.sayHello("Athira"); // calling lambda function

        List<Student> students = Arrays.asList(
            new Student("Athira", 22, 88.5),
            new Student("Anu", 21, 92.3),
            new Student("Meera", 23, 67.5)
        );


        // Filter
        List<Student> topStudents = students.stream()
                .filter(s -> s.marks > 75) // lambda Predicate
                .collect(Collectors.toList());

        topStudents.forEach(s -> System.out.println(s.name + " - " + s.marks));

        // Map
        students.stream()
                .map(s -> s.name.toUpperCase()) // lambda Function
                .forEach(System.out::println);

        // Sorted
        students.stream()
                .sorted((a, b) -> Double.compare(b.marks, a.marks))//desc
                .forEach(s -> System.out.println(s.name + " - " + s.marks));

        // Collectors
        Map<Integer, List<Student>> groupByAge = students.stream()
                .collect(Collectors.groupingBy(s -> s.age));//grouped by age
        groupByAge.forEach((age, list) -> System.out.println(age + " -> " + list));

        // Reduce
        double totalMarks = students.stream()
                .map(s -> s.marks)
                .reduce(0.0, (sum, mark) -> sum + mark);
        System.out.println(+ totalMarks);

        //Optional 
        Optional<Student> firstTopper = students.stream()
                .filter(s -> s.marks > 80)
                .findFirst();

        //  Optional methods
        firstTopper.ifPresent(s -> System.out.println(s.name + " - " + s.marks));

        // Example: if not found
        Optional<Student> missingStudent = students.stream()
                .filter(s -> s.name.equalsIgnoreCase("Athi")) // doesn't exist so return default else return the value
                .findFirst();

        Student defaultStudent = missingStudent.orElse(new Student("Default", 0, 0.0));
        System.out.println("\nMissing student handled with orElse: " + defaultStudent.name);


        Student maybeNull = null;  // when we get null from DB or input

        Optional<Student> optionalStudent = Optional.ofNullable(maybeNull);

        // Check presence
        if (optionalStudent.isPresent()) {
            System.out.println("Student found: " + optionalStudent.get().name);
        } else {
            System.out.println("Student is null, using default...");
        }

    }
}


// Student Class
class Student {
    String name;
    int age;
    double marks;

    Student(String name, int age, double marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    public String toString() {
        return name + " (" + marks + ")";
    }
}
