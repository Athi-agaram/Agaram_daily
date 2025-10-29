class Pizza {
    private String size;
    private boolean cheese;
    private boolean pepperoni;
    private boolean extraToppings;

    public Pizza(String size, boolean cheese, boolean pepperoni, boolean extraToppings) {
        this.size = size;
        this.cheese = cheese;
        this.pepperoni = pepperoni;
        this.extraToppings = extraToppings;
    }

    public void show() {
        System.out.println("Pizza size: " + size);
        System.out.println("Cheese: " + cheese);
        System.out.println("Pepperoni: " + pepperoni);
        System.out.println("Extra toppings: " + extraToppings);
    }
}
class PizzaBuilder {
    private String size;
    private boolean cheese;
    private boolean pepperoni;
    private boolean extraToppings;

    public PizzaBuilder setSize(String size) {
        this.size = size;
        return this;
    }

    public PizzaBuilder addCheese(boolean cheese) {
        this.cheese = cheese;
        return this;
    }

    public PizzaBuilder addPepperoni(boolean pepperoni) {
        this.pepperoni = pepperoni;
        return this;
    }

    public PizzaBuilder addExtraToppings(boolean extraToppings) {
        this.extraToppings = extraToppings;
        return this;
    }

    public Pizza build() {
        return new Pizza(size, cheese, pepperoni, extraToppings);
    }
}

public class Builder {
    public static void main(String[] args) {
        System.out.println("\nfirst pizza\n");

        Pizza pizza1 = new PizzaBuilder()
                .setSize("Medium")
                .addCheese(true)
                .addPepperoni(true)
                .build();

        pizza1.show();

        System.out.println("\nsecond pizza\n");

        Pizza pizza2 = new PizzaBuilder()
                .setSize("Large")
                .addExtraToppings(true)
                .build();

        pizza2.show();
    }
}
    

