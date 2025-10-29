
interface Coffee {
    String getDescription();
    double getCost();
}

class PlainCoffee implements Coffee {
    public String getDescription() {
        return "Plain Coffee";
    }

    public double getCost() {
        return 5.0;
    }
}

abstract class CoffeeDecorator implements Coffee {
    protected Coffee coffee; 
    public CoffeeDecorator(Coffee coffee) {
        this.coffee = coffee;
    }

    public String getDescription() {
        return coffee.getDescription();
    }

    public double getCost() {
        return coffee.getCost();
    }
}


class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) {
        super(coffee);
    }

    public String getDescription() {
        return coffee.getDescription() + ", Milk";
    }

    public double getCost() {
        return coffee.getCost() + 2.0;
    }
}

class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) {
        super(coffee);
    }

    public String getDescription() {
        return coffee.getDescription() + ", Sugar";
    }

    public double getCost() {
        return coffee.getCost() + 1.0;
    }
}

public class DecoratorDemo {
    public static void main(String[] args) {
        Coffee coffee = new PlainCoffee();
        System.out.println(coffee.getDescription() + " ₹" + coffee.getCost());

        coffee = new MilkDecorator(coffee);
        System.out.println(coffee.getDescription() + " ₹" + coffee.getCost());

        coffee = new SugarDecorator(coffee);
        System.out.println(coffee.getDescription() + " ₹" + coffee.getCost());

        coffee = new MilkDecorator(new SugarDecorator(new MilkDecorator(new PlainCoffee())));
        System.out.println(coffee.getDescription() + " ₹" + coffee.getCost());
    }
}
