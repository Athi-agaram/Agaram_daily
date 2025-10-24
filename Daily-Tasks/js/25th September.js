//Class in JavaScript
//always use capital letter for class name and alsways use constructor method to initialize object
class Car{
    constructor(name,year){
        this.name=name;
        this.year=year
    }

    display(){
        return "Car Name is "+this.name+" from the year " +this.year;
    }
    age(){
        let date=new Date();
        return date.getFullYear()-this.year;
    }
}

//creating objects
const Car1=new Car("Ford",2018);
const Car2=new Car("Hyundai",2019);

//accessing properties and methods
console.log(Car1.name);
console.log(Car1.age());

class Model extends Car{
    constructor(name,year,mod){
        super(name,year);
        this.mod=mod;
    }
    show(){
        return this.display()+ " and Model is "+this.mod;
    }
}

const Car3=new Model("Ford",2018,"Mustang");
console.log(Car3.show());

class Student{
    constructor(name){
        this.name=name;
    }
    //to get the value or like read the value
    get sname(){
        return this.name;
    }
    //to set the value or like update the value
    set sname(x){
        return this.name=x;
    }
}

const student1=new Student("Jacob");
student1.name="Emily";
console.log(student1.name);


//static methods
//can be called without creating object of the class
//static methods are called on the class itself, not on instances of the class
//in static method we dont have to use this keyword
class Movie{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    //not using this keyword because instance of the class is not created
    static hello(name,year){
        return "Hello!! The movie "+name+" is released in the year "+year;
    }
    //we can use static method inside another static method
    static welcome(name,year){
        return this.hello(name,year);
    }
    //`we can also use static method inside non static method
    info(){
        return Movie.hello(this.name,this.year);//does not work with this.hello
    }

}

console.log(Movie.hello("Inception",2010));
console.log(Movie.welcome()) // Output: Hello!! The movie Inception is released in the year 2010

const fruits= new Map([
    ['apples',500],
    ['bananas',300],
    ['oranges',200]
]);

let sample=fruits.get('apples');
console.log(sample);

let text="";
// fruits.forEach(function(value,key){
//     text+=key+" = "+value+"\n";
// })
// ;

for(const x of fruits.entries()){
    text+=x+"\n"
}
console.log(text);

//map methods-groupby
const people=[
    {name:"Athira", age:21},
    {name:"Achu", age:20},
    {name:"Ashok",age:27}
]

function callback(age){
    return age>=21?"Adult":"Minor";

}

const result=Map.groupBy(people,callback);
console.log(result);