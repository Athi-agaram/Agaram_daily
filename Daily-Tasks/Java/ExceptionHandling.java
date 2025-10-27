import java.io.*;

class BasicExample {
    void divide(int a, int b) {
        try {
            int result = a / b;  // May cause ArithmeticException
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero");
        } finally {
            System.out.println("always runs");
        }
    }
}

class ThrowExample {
    void checkAge(int age) {
        if (age < 18) {
            // Creating and throwing an exception manually
            throw new ArithmeticException("You must be 18 or older.");
        } else {
            System.out.println("Access granted");
        }
    }
}

class ThrowsExample {
    void readFile() throws IOException {
        // This method declares it may throw IOException
        FileReader file = new FileReader("nonexistent.txt"); // File may not exist
        BufferedReader fileInput = new BufferedReader(file);
        System.out.println(fileInput.readLine());
        fileInput.close();
    }
}

// Checked custom exception
class InsufficientBalanceException extends Exception {
    public InsufficientBalanceException(String message) {
        super(message);
    }
}

class NegativeDepositException extends RuntimeException {
    public NegativeDepositException(String message) {
        super(message);
    }
}

class BankAccount {
    private double balance = 1000;

    // Withdraw method uses "throws" for a checked exception
    public void withdraw(double amount) throws InsufficientBalanceException {
        if (amount > balance) {
            throw new InsufficientBalanceException("Not enough balance! Current: " + balance);
        } else {
            balance -= amount;
            System.out.println("Withdrawn: " + amount + " | Remaining balance: " + balance);
        }
    }

    // Deposit method uses an unchecked exception
    public void deposit(double amount) {
        if (amount < 0) {
            throw new NegativeDepositException("Cannot deposit a negative amount!");
        } else {
            balance += amount;
            System.out.println("Deposited: " + amount + " | New balance: " + balance);
        }
    }
}


public class ExceptionHandling {
    public static void main(String[] args) {

        BasicExample b1 = new BasicExample();
        b1.divide(10, 2);
        b1.divide(10, 0);

        ThrowExample t1 = new ThrowExample();
        try {
            t1.checkAge(15);
        } catch (ArithmeticException e) {
            System.out.println("Caught Exception: " + e.getMessage() + "\n");
        }

        ThrowsExample th = new ThrowsExample();
        try {
            th.readFile();
        } catch (IOException e) {
            System.out.println("Caught IOException: " + e.getMessage() + "\n");
        }

        BankAccount acc = new BankAccount();
        try {
            acc.withdraw(500);
            acc.withdraw(700); // will trigger checked exception
        } catch (InsufficientBalanceException e) {
            System.out.println("Caught checked custom exception: " + e.getMessage());
        }

        try {
            acc.deposit(-200); // will trigger unchecked exception
        } catch (NegativeDepositException e) {
            System.out.println("Caught unchecked custom exception: " + e.getMessage());
        }

    }
}
