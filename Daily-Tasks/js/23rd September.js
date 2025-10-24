//indexOf
const movies=['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'Forrest Gump','The God Father','Fight club'];
let position=movies.indexOf("The Godfather")+1;
console.log("Position of the godfather " +position);//reurns 2 but returns -1 if not found
//lastIndexOf
let lastposition=movies.lastIndexOf('The Godfather')+1;
console.log("last Position of the godfather " +lastposition);//returns 6
//includes
console.log("Contains/Includes " +movies.includes('Fight club'));
//find
const numbers=[10,20,30,40,49,80];
let first=numbers.find(findfunction);

function findfunction(value,index,array){
        return value > 40;
}

//Default Parameters
function sayHi(name = "Guest") {
  console.log(`Hi, ${name}!`);
}
sayHi();        // "Hi, Guest!"
sayHi("Athira"); //Hi, Athira!

console.log(first);
//instanceof
console.log("TypeOf 'Hello' is " +typeof "Hello"); // "string"
let arr = [1, 2, 3];
console.log("Instance of Array " +arr instanceof Array);
console.log("Instance of object " +arr instanceof Object);
console.log("Instance of String " +arr instanceof String);
//isArray
console.log("isArray " +Array.isArray(arr));
console.log("isArray " +Array.isArray("Hello"));
//ternary operator
let marks = 75;
let grade=(marks >=90)?'A': 
          (marks >=80)?'B':
          (marks >=70)?'C':
          (marks >=60)?'D':'F';
console.log("Ternary operator " +grade);

let user = { id: 1, name: "Athira", lang: "JS" };

for (let key in user) {
  console.log(key + " → " + user[key]);
}
//sort and reverse alter the original array
console.log("sort " +movies.sort());
console.log("reverse " +movies.reverse());
//toSorted and toReversed do not alter the original array it creats a new array
console.log(movies.toSorted());
console.log("reverse sort " +movies.toReversed());

//the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0, no changes are done with the sort order of the two values.
const points=[40,20,70,10,90,50];
console.log("Numeric sort asc " +points.sort(function(a,b){return a-b}));//ascending order
console.log("Numeric sort desc " +points.sort(function(a,b){return b-a}));//descending order

function minmaxArray(arr){
        return("Min : "+Math.min(...arr)+"Max : "+Math.max(...arr));
 }
 console.log (minmaxArray(points));

points.forEach(function(value,index,array){
        console.log("value "+value);
        console.log("index "+index);
        console.log("array "+array);
})

//the map() method creates a new array by performing a function on each array element

const num1=[1,2,3,4,5];
let num2 =num1.map(function(value,index,array){
        console.log("value : "+value);
        console.log("index : "+index);
        return value*2;

});
console.log(num2);

// map in arrow function

let num3=num1.map(value=>value*3);
console.log(num3);

const num4=num1.map((value,index)=>value +" is at index "+index);
console.log(num4);

const newarr=num1.flatMap((value)=>value*3);
console.log(newarr);

//filter elemets based on condition
const x=[12,34,56,78,90];
const res=x.filter(newfunction);
function newfunction(x){
        return x>50;
}

console.log(res);
//every funtion checks whether every single element in the array satisfies the condition
const arr1 = [45, 4, 9, 16, 25];
let Over18 = arr1.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(Over18);

//some function checks whether at least one element in the array satisfies the condition
let someOver18 = arr1.some(myFunction);
console.log(someOver18);

//from function create an Array from a String
//for string 
let text = "ABCDEFG";
console.log(Array.from(text));
//for itegers
const myNumbers = [1,2,3,4];
const myArr = Array.from(myNumbers,(x)=>x*2);
console.log(myArr);

//with() method
//used to update elemnets
const months=["Jan","febr","mar","april"];
const result=months.with(2,"March");
console.log(result);

//spread -expands an array into its elements
const random=[1,2,3,4,5];
console.log(...random);

//rest - only takes the rest of the elements and puts them in an array
let a,rest;
const array=[1,2,3,4,5,6,7,8,9];
[a,...rest]=array;
console.log(a);//1
console.log(rest);//[2,3,4,5,6,7,8,9]

//object -literals
const personName={
        Name:"Athira",
        Initials:"AR",
        Age:21
};
//using new keyword
const personName2=new Object({
        Name:"Athira",
        Initials:"AR",
        Age:21
});


const girl=Object.create(personName);
girl.Name="Achu";
girl.Age=20;
console.log(girl.Age);//20


//The fromEntries() method creates an object from iterable key / value pairs
const random1=Object.fromEntries(Object.entries( personName));
console.log(personName.Age);

//assign()-assign properties from one object to another
const obj2={Name:"Vijay",Age:22};
console.log(Object.assign(personName,obj2));

//for in loop
//person.x will not work (Because x is the loop variable)
let texts="";
for(let x in personName){
        texts+=personName[x]+" ";
}
console.log(texts);

//values()-returns an array of a given object's values
let obj3=Object.values(personName);
console.log(obj3);
let valueRes=obj3.toString();
console.log(valueRes);

let jsonstring=JSON.stringify(personName);
console.log(jsonstring);

//Math.round(x)	Returns x rounded to its nearest integer 4.4-4, 4.5-5
// Math.ceil(x)	Returns x rounded up to its nearest integer 4.1-5,-4.1 -4 (higher value)
// Math.floor(x)Returns x rounded down to its nearest integer 4.9-4,-4.9 -5 (lower value)
// Math.trunc(x)Returns the integer part of x by removing any fractional digits 4.9-4,-4.9 -4
console.log(Math.round(4.5));
console.log(Math.ceil(-4.1));
console.log(Math.floor(-4.9));
console.log(Math.trunc(-4.9));

//Math.sign(x) returns if x is negative, null or positive.
// If x is positive it returns 1
// If x is negative it returns -1
// If x is zero, it returns 0
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(0));

//Math.pow(x, y) returns the value of x to the power of y:

Math.pow(8, 2);
console.log(Math.pow(8,2));

//Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(64));

//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random());

//Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-4.7));


//objects.keys()-returns an array of a given object's property names, in the same order as we get with a normal loop.
const object = {
  a: "some string",
  b: 42,
  c: false,
};

console.log(Object.keys(object));

//object.values()-returns an array of a given object's values
console.log(Object.values(object));

//object.entries()-returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
console.log(Object.entries(object));    

//object.freeze() -prevents modification of existing property attributes and values, and prevents the addition of new properties.
console.log (Object.freeze (object));

//object.create()-creates a new object, using an existing object as the prototype of the newly created object.
//cannot modify the parent object can only add new properties to the new object
const newobj=Object.create(object);
newobj.d="hello";
console.log(newobj.d);
console.log(newobj.b);

//object.hasOwnProperty()-returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
console.log(newobj.hasOwnProperty('d'));
console.log(newobj.hasOwnProperty('b'));

//objet.getownpropertynames()-returns an array of all properties (including non-enumerable(hidden) properties except for those which use Symbol) found directly in a given object.
console.log(Object.getOwnPropertyNames(object));

//object.defineproperty()-adds the named property described by a given descriptor to an object.
const object1 = {};
Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false, //can be changed or not
  enumerable: true, //shows up in for in loop or not
  configurable: false //can be deleted or changed later
});
object1.property1 = 77;

//object.getownpropertysymbols()-returns an array of all symbol properties found directly upon a given object.
const object2 = {};
const a1 = Symbol('a');
const b1 = Symbol.for('b');
object2[a1] = 'local symbol';
object2[b1] = 'global symbol';
console.log(Object.getOwnPropertySymbols(object2));

