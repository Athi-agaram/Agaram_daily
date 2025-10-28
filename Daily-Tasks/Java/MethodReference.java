import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class MethodReference {

    public static void main(String[] args) {

        // 1. Static Method Reference
        List<String> names = Arrays.asList("Athira", "Anu", "Meera");
        names.forEach(Utility::printUpper);

        // 2. Instance Method Reference (using a specific object)
        Printer printer = new Printer();
        names.forEach(printer::printLower);


        // 3. Instance Method Reference (using class name)
        // This works when the method is called on each element of the stream
        names.stream()
             .map(String::toUpperCase) // for each element, call toUpperCase()
             .forEach(System.out::println);
        // System.out::println means call println() on the System.out object


        // 4. Constructor Reference
        // Creating new Student objects using a constructor reference
        List<String> studentNames = Arrays.asList("John", "Meera", "Akhil");

        // Function<String, Student> means: takes a String (name) and returns a Student
        Function<String, Student> createStudent = Student::new;

        // map each name to new Student(name)
        List<Student> studentList = studentNames.stream()
                                                .map(createStudent)
                                                .collect(Collectors.toList());

        studentList.forEach(s -> System.out.println("Student: " + s.name));
    }
}

// Static Method Example
class Utility {
    public static void printUpper(String str) {
        System.out.println(str.toUpperCase());
    }
}

// Instance Method Example
class Printer {
    public void printLower(String str) {
        System.out.println(str.toLowerCase());
    }
}

class Student {
    String name;

    Student(String name) {
        this.name = name;
        System.out.println("New Student created: " + name);
    }
}
