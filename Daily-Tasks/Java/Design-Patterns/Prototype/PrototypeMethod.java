class Student implements Cloneable {
    String name;
    int age;
    String school;

    Student(String name, int age, String school) {
        this.name = name;
        this.age = age;
        this.school = school;
    }

    public Student clone() {
        try {
            return (Student) super.clone(); 
        } catch (CloneNotSupportedException e) {
            return null;
        }
    }

    public void show() {
        System.out.println("Name: " + name + ", Age: " + age + ", School: " + school);
    }
}

public class PrototypeMethod {
        public static void main(String[] args) {
        Student s1 = new Student("Athira", 20, "ABC School");
        Student s2 = s1.clone();
        Student s3 = s1.clone();


        s2.name = "Riya";
        s3.name = "Riyaz";


        s1.show();
        s2.show();
        s3.show();
    }
}

