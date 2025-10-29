interface Chair{
    void create();
}
interface Sofa{
    void create();
}

class ModernChair implements Chair{
    public void create(){
        System.out.println("Modern chair");
    }
}
class ModernSofa implements Sofa{
    public void create(){
        System.out.println("Modern sofa");
    }
}
class VictorianChair implements Chair{
    public void create(){
        System.out.println("Victorian chair");
    }
}
class VictorianSofa implements Sofa{
    public void create(){
        System.out.println("Victorian sofa");
    }
}

interface FurnitueFactory{
    Chair createChair();
    Sofa createSofa();
}

class ModernFurnitureFactory implements FurnitueFactory{
    public Chair createChair(){
        return new ModernChair();
    }
    public Sofa createSofa(){
        return new ModernSofa();
    }
}
class VictorianFurnitureFactory implements FurnitueFactory{
    public Chair createChair(){
        return new VictorianChair();
    }
    public Sofa createSofa(){
        return new VictorianSofa();
    }
}
public class AbstractFactory {
    public static void main(String[] args) {
        FurnitueFactory factory=new ModernFurnitureFactory();
        Chair chair=factory.createChair();
        Sofa sofa=factory.createSofa();
        chair.create();
        sofa.create();
        factory=new VictorianFurnitureFactory();
        chair =factory.createChair();
        sofa =factory.createSofa();
        chair.create();
        sofa.create();
    }
}
