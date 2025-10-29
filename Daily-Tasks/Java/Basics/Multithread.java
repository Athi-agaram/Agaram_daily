
import java.util.concurrent.*;

//extends thread
class MyThread extends Thread {
    public MyThread(String name) {
        super(name); 
    }

    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() +"Count: " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(getName() + " interrupted");
            }
        }
        System.out.println(getName() + " finished execution");
    }
}

// implement Runnable 
class MyRunnable implements Runnable {
    private String taskName;
    public MyRunnable(String taskName) {
        this.taskName = taskName;
    }

    public void run() {
        System.out.println(taskName + " is running on " + Thread.currentThread().getName());
    }
}

public class Multithread {
    public static void main(String[] args) throws InterruptedException {

        System.out.println("Main thread: " + Thread.currentThread().getName());
        System.out.println("Main thread priority: " + Thread.currentThread().getPriority());
        System.out.println("Main thread is daemon? " + Thread.currentThread().isDaemon());

        // threads by extending Thread
        MyThread t1 = new MyThread("HighPriorityThread");
        MyThread t2 = new MyThread("LowPriorityThread");

        // Setting priorities
        t1.setPriority(Thread.MAX_PRIORITY); // 10
        t2.setPriority(Thread.MIN_PRIORITY); // 1

        // Naming threads
        System.out.println("Thread names: " + t1.getName() + ", " + t2.getName());

        t1.start();
        t2.start();

        // Joining threads (wait until they finish)
        t1.join();
        t2.join();
 
        //runnable threads
        Thread r1 = new Thread(new MyRunnable("Task A"));
        Thread r2 = new Thread(new MyRunnable("Task B"));
        r1.start();
        r2.start();
        r1.join();
        r2.join();


        //Daemon Thread example
        Thread daemonThread = new Thread(() -> {
            while (true) {
                System.out.println("Daemon thread working ");
                try { 
                    Thread.sleep(1000); 
                    } 
                catch (InterruptedException e) {}
            }
        });
        daemonThread.setDaemon(true); 
        daemonThread.start();


        // Thread Group example
        ThreadGroup group = new ThreadGroup("MyThreadGroup");
        Thread g1 = new Thread(group, new MyRunnable("GroupTask1"));
        Thread g2 = new Thread(group, new MyRunnable("GroupTask2"));
        g1.start();
        g2.start();

        System.out.println("Active threads in group: " + group.activeCount());
        group.list();
        g1.join();
        g2.join();


        // Thread Pool example using ExecutorService
        //create only 2 tasks and after that 2 tasks will wait for previous to complete
        ExecutorService pool = Executors.newFixedThreadPool(2); 
        for (int i = 1; i <= 4; i++) {
            final int taskNum = i;
            pool.execute(() -> {
                System.out.println( taskNum + " running on " + Thread.currentThread().getName());
                try { Thread.sleep(500); } catch (InterruptedException e) {}
            });
        }
        pool.shutdown();


    }
}
