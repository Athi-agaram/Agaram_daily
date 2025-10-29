import java.util.*;

// Step 1: Observer Interface
interface Observer {
    void update(String weather);
}

// Step 2: Subject Interface
interface Subject {
    void addObserver(Observer o);
    void removeObserver(Observer o);
    void notifyObservers();
}

// Step 3: Concrete Subject (Weather Station)
class WeatherStation implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String weather;

    public void setWeather(String weather) {
        this.weather = weather;
        notifyObservers(); // Notify all observers whenever weather changes
    }

    @Override
    public void addObserver(Observer o) {
        observers.add(o);
    }

    @Override
    public void removeObserver(Observer o) {
        observers.remove(o);
    }

    @Override
    public void notifyObservers() {
        for (Observer o : observers) {
            o.update(weather);
        }
    }
}

// Step 4: Concrete Observer (User)
class User implements Observer {
    private String name;

    public User(String name) {
        this.name = name;
    }

    @Override
    public void update(String weather) {
        System.out.println(name + " got update: Weather changed to " + weather);
    }
}

// Step 5: Client Code
public class ObserverMethod {
    public static void main(String[] args) {
        WeatherStation station = new WeatherStation();

        Observer user1 = new User("Aarav");
        Observer user2 = new User("Meera");

        // Users subscribe to the weather station
        station.addObserver(user1);
        station.addObserver(user2);

        // Weather changes — everyone gets notified
        station.setWeather("Sunny ");
        station.setWeather("Rainy ");

        // Aarav unsubscribes
        station.removeObserver(user1);

        // Now only Meera gets notified
        station.setWeather("Windy ");
    }
}

