class singleton {
    private static singleton Instance;

    private singleton(){
            System.out.println("Singleton created");
    }
    public static singleton getInstance(){
        if(Instance == null){
            Instance = new singleton();
        }
        return Instance;
    }
}
public class Main{
    public static void main(String[] args) {
        singleton s1=singleton.getInstance();
        singleton s2=singleton.getInstance();
        System.out.println(s1==s2);
    }
}


// Logger.java
// class singleton {
//     // Step 1: Create a single static instance
//     private static singleton instance;

//     // Step 2: Make the constructor private
//     private singleton() {
//         System.out.println("Logger created");
//     }

//     // Step 3: Global access method
//     public static singleton getInstance() {
//         if (instance == null) {
//             instance = new singleton();  // create only once
//         }
//         return instance;
//     }

//     // Step 4: Some functionality
//     public void log(String message) {
//         System.out.println("[LOG] " + message);
//     }
// }

// // Main.java
// public class Main {
//     public static void main(String[] args) {
//         // Get logger instance
//         singleton logger1 = singleton.getInstance();
//         singleton logger2 = singleton.getInstance();

//         // Use logger anywhere in your app
//         logger1.log("Application started");
//         logger2.log("User logged in");

//         // Check if both are same object
//         System.out.println(logger1 == logger2); // true ✅
//     }
// }
