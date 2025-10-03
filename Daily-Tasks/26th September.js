//es6 and features

// This will not work
let myFunction = (x, y) => { x * y } ;

// This will not work
// let myFunction1 = (x1, y1) => return x1 * y1 ;

// Only this will work
//curly braces are very important
let myFunction2 = (x2, y2) => { return x2 * y2 };

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Destructuring Assignment
let { firstName, age } = person;

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment
let [fruit1, fruit2] = fruits;

//spread operator
const numbers = [23,55,21,87,56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

console.log(minValue);
console.log(maxValue);

let language = "JavaScript";
let text = "";

for (let x of language) {
    text += x + " ";
}

console.log(text);

//to create a map
const fruits1 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);


//to create a set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

//class
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

//symbol -It represents a unique "hidden" identifier that no other code can accidentally access.

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let id = Symbol('id');
person1[id] = 140353;
// Now person[id] = 140353
// but person.id is still undefined

//String.includes()

let text2 = "Hello world, welcome to the universe.";
text.includes("world")   //true

//array entries

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits3.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}

