"use client"
import { useState, useCallback } from 'react';
const Incrementer = () => {
const [count, setCount] = useState(0);
const increment = useCallback(() => setCount(count + 1), [count]);
return (
<div>
<p>Count: {count}</p>
<button onClick={increment} className='bg-blue-500 text-white p-2 rounded'>Increment</button>
</div>
);
};
export default Incrementer;