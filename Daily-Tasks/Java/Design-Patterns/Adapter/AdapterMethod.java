interface Charger{
    void charge();
}

class OldCharger{
    public void oldCharge(){
        System.out.println("Charging with old charger");
    }
}

class Adapter implements Charger{
    private OldCharger oldCharger;
    public Adapter(OldCharger oldcharger){
        this.oldCharger=new OldCharger();
    }
    public void charge(){
        oldCharger.oldCharge();
    }
}

public class AdapterMethod {
    public static void main(String[] args) {
        OldCharger oc=new OldCharger();
        Charger adapter=new Adapter(oc);
        adapter.charge();


    }
}
