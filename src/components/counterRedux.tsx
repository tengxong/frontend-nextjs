"use client";
// components/Counter.tsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/couterSlice';
const CounterRedux = () => {
const count = useSelector((state:any) => state.counter.value);
const dispatch = useDispatch();
return (
<div>
<h1>Count: {count}</h1>
<button className='bg-blue-500 text-white p-2 rounded' onClick={() => dispatch(increment())}>Increment</button>
<button className='bg-red-500 text-white p-2 rounded m-2' onClick={() => dispatch(decrement())}>Decrement</button>
</div>
);
};
export default CounterRedux;