 interface Calculators {
    // abstract method
    int add(int a, int b);

    // default method
    default int multiply(int a, int b) {
        return a * b;
    }

    // static method
    static int subtract(int a, int b) {
        return a - b;
    }
}

class SimpleCalculator implements Calculators {
    public int add(int a, int b) {
        return a + b;
    }
}

public class DefaultandStatic {
    public static void main(String[] args) {
        SimpleCalculator calc = new SimpleCalculator();
        System.out.println("Add: " + calc.add(5, 3));
        System.out.println("Multiply: " + calc.multiply(5, 3));
        System.out.println("Subtract: " + Calculators.subtract(5, 3));
    }
}
