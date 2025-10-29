interface Shape{
    void draw();
}

class Circle implements Shape{
    public void draw(){
        System.out.println("Circle");
    }
}

class Rectangle implements Shape{
    public void draw(){
        System.out.println("Rectangle");
    }
}

class Triangle implements Shape{
    public void draw(){
        System.out.println("Triangle");
    }
}

class ShapeFactory{
    public Shape getShape(String s){
        if(s==null) return null;

        switch(s.toLowerCase()){
            case "circle": return new Circle();
            case "rectangle": return new Rectangle();
            case "triangle": return new Triangle();
            default:return null;
        }
    }
}

public class FactoryMethod {
    public static void main(String[] args) {
        ShapeFactory factory=new ShapeFactory();
        Shape s1=factory.getShape("circle");
        s1.draw();
    }
    
}
