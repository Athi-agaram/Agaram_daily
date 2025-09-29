// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let a = 1234567890123456789012345n;
let b = BigInt(1234567890123456789012345)

// Boolean
let c = true;
let d = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let e;
let f;

// Null
let g = null;
let h = null;

// Symbol
const x = Symbol();
const y = Symbol();

let i = 5 + 5+"5";//10+"5"->"105"
let j = "5" + 5+5;//"5"+5=55+"5"->"555"
let k = "Hello" + 5;

// Object
const persons = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//arrow function
let myFunction = (a, b) => a * b;
console.log(myFunction(4, 3));

let numbers = [10, 20, 30, 40, 50];
console.log("Original array:", numbers);

// push - add to end
numbers.push(60);
console.log("After push:", numbers);

// pop - remove last
numbers.pop();
console.log("After pop:", numbers);

// unshift - add to start
numbers.unshift(5);
console.log("After unshift:", numbers);

// shift - remove first
numbers.shift();
console.log("After shift:", numbers);

// length
console.log("Length of array:", numbers.length);

// Access elements
console.log("First element:", numbers[0]);
console.log("THird element",numbers.at(2));
console.log("Last element:", numbers[numbers.length - 1]);

// forEach - loop
console.log("Loop using forEach:");
numbers.forEach(n=>(console.log(n)));
// map - transform
let squares = numbers.map(n => n * n);
console.log("Squares:", squares);

// filter - keep only even numbers
let evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

// find - first number > 25
let found = numbers.find(n => n > 25);
console.log("First number > 25:", found);

// reduce - sum of all numbers
let sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum of all numbers:", sum);

// sort
let sorted = numbers.sort((a, b) => a - b);
console.log("Sorted ascending:", sorted);

// reverse
let reversed = numbers.reverse();
console.log("Reversed:", reversed);

// includes
console.log("Array includes 30?", numbers.includes(30));
//join
console.log(numbers.join("///"));
const fruits=["banana","apple","mango"];

//to join two arrays
console.log(numbers.concat(fruits));
animals=["dog","cat","elephant"];
const res=numbers.concat(fruits,animals);
console.log(res);

//flatmap
const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr);

//splice- remove 0 elements from index 2 and add lemon and kiwi
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

console.log(typeof null);

//splice- remove 2 elements from index 2 and add lemon and kiwi
fruits.splice(2, 2, "Lemon", "Kiwi");

const arr1 = [1, 2, 3];
arr1.splice(1,2 ,4,5,6);
console.log(arr1);

//slice
const arr2 = [1, 2, 3, 4, 5];
const newArr2 = arr2.slice(1, 4);
console.log(newArr2);

