//normally to call two functions
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();
//only the last one is called

//to control a sequence
function Displayer(some) {
   console.log(some); 
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
Displayer(result);


//Callback function

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);//here myDisplayer is the callback function
//here calculator function run the callback after the calculation is finished
//for callback function we should not use parantheses

let Promise1 = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
Promise1.then(
  function(value) {},
  function(error) {}
);


//promises- Before Promises, asynchronous code in JavaScript was mostly handled using callbacks,
//  which often led to callback hell
//has three states: pending,fulfilled,rejected

const myPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const sucess=true;
        if(sucess){
            return "Completed";
        }
        else{
            return "Not Commplted";
        }
    },2000);
});

//handling promise - we use then catch method

myPromise
.then((result)=>{
    console.log("Success"+result);
})
.catch((error)=>{
    console.log("Error"+error);
});


//await pauses execution until the promise settles.
//async functions always return a promise.
async function runPromise() {
  try {
    const result = await myPromise;
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

runPromise();


//chaining promise
new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    console.log(result); // 1
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 2
    return result * 3;
  })
  .then((result) => {
    console.log(result); // 6
  })
  .catch((error) => {
    console.error(error);
  });

  //promise all -Waits for all promises to be resolved or rejects immediately if any promise fails.
  Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),  //promise.reject("failed") (another case)
  Promise.resolve(3)
])
.then(results => console.log(results)) // [1,2,3]
.catch(err => console.error(err));

//prise race-returns the first promise that settles

Promise.race([
  new Promise(res => setTimeout(() => res("First"), 100)),
  new Promise(res => setTimeout(() => res("Second"), 200))
]).then(result => console.log(result)); // "First"

// promise allSettled-wait for promises to settle then send the result

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Error")
]).then(results => console.log(results));

//promisAny-returns the first fullfilled promise

Promise.any([
  Promise.reject("Fail"),
  Promise.resolve("Win")
]).then(result => console.log(result)); // "Win"


//eg to simulate an api call
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "valid") resolve({ data: "Some data" });
      else reject("404 Not Found");
    }, 1000);
  });
}

fetchData("valid")
  .then(data => console.log(data))
  .catch(err => console.error(err));

