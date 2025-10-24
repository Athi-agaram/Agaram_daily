//sets -unique values of an array
let myArray = [1, 2, 2, 3, 4, 4, 5];
let uniqueValues = new Set(myArray);
console.log(uniqueValues); // Output: Set { 1, 2, 3, 4, 5 }

//set methods
uniqueValues.add(6);
console.log(uniqueValues); // Output: Set { 1, 2, 3, 4, 5, 6 }
uniqueValues.delete(2);
console.log(uniqueValues); // Output: Set { 1, 3, 4, 5, 6 }
console.log(uniqueValues.has(3)); // Output: true
console.log(uniqueValues.size); // Output: 5
uniqueValues.clear();
console.log(uniqueValues); // Output: Set {}

//typeof set
console.log(typeof uniqueValues); // Output: object 
//entries() method
//has now key and value both same in sets
let mySet = new Set([1, 2, 3]);
let entries = mySet.entries();
console.log(entries.next().value); // Output: [1, 1]
console.log(entries.next().value); // Output: [2, 2]
console.log(entries.next().value); // Output: [3, 3]    

//logic methods
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);
let union = new Set([...setA, ...setB]);
console.log(union); // Output: Set { 1, 2, 3, 4, 5 }
let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Output: Set { 3 }
let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // Output: Set { 1, 2 }    
let subset = new Set([1, 2]);
//disjoint
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isDisjointFrom(B);
console.log(answer); // Output: false
//subset
let answer1 = A.isSubsetOf(B);
console.log(answer1); // Output: false
let answer2 = subset.isSubsetOf(setA);
console.log(answer2); // Output: true
//superset
let answer3 = setA.isSupersetOf(subset);
console.log(answer3); // Output: true
let answer4 = setB.isSupersetOf(subset);
console.log(answer4); // Output: false

//A JavaScript WeakSet is a collection of values where the values must be objects
let weakSet = new WeakSet();
let obj1 = { name: 'John' };
let obj2 = { name: 'Jane' };
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1)); // Output: true
console.log(weakSet.has(obj2)); // Output: true
weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // Output: false

//date
let currentDate = new Date();
console.log(currentDate);   
console.log(currentDate.toDateString()); // Output: e.g., "Mon Sep 24 2024"
console.log(currentDate.toTimeString()); // Output: e.g., "14:23:45 GMT+0000 (Coordinated Universal Time)"
console.log(currentDate.toISOString()); // Output: e.g., "2024-09-24T14:23:45.678Z"
console.log(currentDate.getFullYear()); // Output: e.g., 2024
console.log(currentDate.getMonth()); // Output: e.g., 8 (September, as months are zero-indexed)
console.log(currentDate.getDate()); // Output: e.g., 24
console.log(currentDate.getDay()); // Output: e.g., 1 (Monday, as days are zero-indexed)
console.log(currentDate.getHours()); // Output: e.g., 14
console.log(currentDate.getMinutes()); // Output: e.g., 23
console.log(currentDate.getSeconds()); // Output: e.g., 45
console.log(currentDate.getMilliseconds()); // Output: e.g., 678

//maps - key-value pairs
let myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
console.log(myMap); // Output: Map { 'name' => 'John', 'age' => 30 }

//events in js
//1. Inline Event Handling
function showAlert() {
    alert('Button clicked!');
}
// <button onclick="showAlert()">Click Me</button>
//2. Event Listener
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});
//3. Event Object
document.getElementById('myButton').addEventListener('click', function(event) {
    console.log('Button clicked at coordinates:', event.clientX, event.clientY);
});
//4. Event methods
document.getElementById('myButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default action
    alert('Default action prevented!');
});
//5. Event mouse events
document.getElementById('myDiv').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});
document.getElementById('myDiv').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});
//6. Keyboard events
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});
document.addEventListener('keyup', function(event) {
    console.log('Key released:', event.key);
});
//7. Form events
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission
    alert('Form submitted!');
});
