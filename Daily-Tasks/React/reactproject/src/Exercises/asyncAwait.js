function fetchPizza() {
  return new Promise(resolve => {
    setTimeout(() => resolve("🍕 Pizza arrived!"), 2000);
  });
}

fetchPizza().then(pizza => {
  console.log(pizza);
  console.log("Eating pizza 🍽️");
});

async function fetchMultiple() {
const data = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Hello Axios',
      body: 'This is a test post',
      userId: 1
    })
      .then(response =>{
       console.log('POST Response:', response.data);  
       setPostData(response.data)})
      .catch(err => setError(err.message));
}


async function orderPizza() {
  console.log("Ordering pizza...");
  const pizza = await fetchPizza(); // wait 2 seconds
  console.log(pizza);               // prints after pizza arrives
  console.log("Eating pizza 🍽️");
}

orderPizza();
