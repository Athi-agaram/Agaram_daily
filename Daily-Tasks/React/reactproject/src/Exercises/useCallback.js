import React, { useState, useCallback } from 'react';

function Callback() {
  const [count, setCount] = useState(0);

  const sayHello = useCallback(() => {
    console.log("Hello!");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={sayHello}>Say Hello</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default Callback;
