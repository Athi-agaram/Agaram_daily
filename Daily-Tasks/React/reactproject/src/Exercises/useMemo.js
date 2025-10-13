import  { useState, useMemo } from 'react';

function UseMemoApp() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    console.log("Calculating double...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default UseMemoApp;
