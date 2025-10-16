import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AxiosExample() {
  const [getData, setGetData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    debugger
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response =>{ 
        debugger
        console.log('GET Response:', response.data); 
        setGetData(response.data)})
      .catch(err => setError(err.message));

    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Hello Axios',
      body: 'This is a test post',
      userId: 1
    })
      .then(response =>{
       console.log('POST Response:', response.data);  
       setPostData(response.data)})
      .catch(err => setError(err.message));

  }, []);

  return (
    <div>
      <h2>Axios Example</h2>

      <h3>GET Request Result:</h3>
      {getData ? (
        <pre>{JSON.stringify(getData, null, 2)}</pre>
      ) : (
        <p>Loading GET data...</p>
      )}

      <h3>POST Request Result:</h3>
      {postData ? (
        <pre>{JSON.stringify(postData, null, 2)}</pre>
      ) : (
        <p>Loading POST data...</p>
      )}

      {error && <p style={{color: 'red'}}>Error: {error}</p>}
    </div>
  );
}
