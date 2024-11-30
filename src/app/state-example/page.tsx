"use client"
import {useState } from 'react';
const StateExample = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <nav>
      <h1>Count: {count}</h1>
      <button onClick={increment} className="bg-blue-500 text-white p-2 rounded">
        Increment
      </button>
    </nav>
  );
};
export default StateExample;