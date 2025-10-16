import  { useEffect } from 'react';
//If fetch finishes before the timeout, you get the fetch response.
//If fetch takes too long, the timeout promise rejects first → you get a timeout error.

function FetchWithTimeout(url, options = {}, timeout = 5000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Fetch timeout')), timeout)
    )
  ]);
}

export default function FetchExample() {

  useEffect(() => {
  FetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'GET',
    headers: { 'Accept': 'application/json', 'Custom-Header': '12345' }
  }, 5000)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => console.log('FETCH GET:', JSON.stringify(data, null, 2)))
    .catch(error => console.error('Fetch GET Error:', error));

  FetchWithTimeout('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Custom-Header': 'abc123'
    },
    body: JSON.stringify({ title: 'Hello', body: 'World', userId: 1 })
  }, 5000)
    .then(response => response.json())
    .then(data => console.log('FETCH POST:', JSON.stringify(data, null, 2)))
    .catch(error => console.error('Fetch POST Error:', error));
}, []);
}

