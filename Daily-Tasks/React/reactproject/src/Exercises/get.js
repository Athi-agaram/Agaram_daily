// // Suppose the user gives this data
// const userId = 1;
// const title = "HelloWorld";

// // ✅ Build a URL with query parameters
// const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}&title=${title}`;

// // 🔍 You can see this URL in the console (and paste it in the browser)
// console.log("Requesting:", url);

// // ✅ Send GET request
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log("GET Response Data:", data);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });


import axios from "axios";

async function GetData() {
  const params = {
    userId: 1,
    title: "HelloWorld"
  };

  try {
    // ✅ axios automatically adds params to the URL
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", { params });
    console.log("GET URL:", response.config.url); // shows the full URL
    console.log("GET Response Data:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default GetData();
