"use client"
import { useState, useEffect } from 'react';
const Timer = () => {
const [time, setTime] = useState(0);
useEffect(() => {
const timer = setInterval(() => {
setTime(time + 1);
}, 1000);

return () => clearInterval(timer); // Cleanup on unmount
}, [time]); // Depend on `time`

useEffect(() =>{},[]); // work only time when access this page

const getProducts = () => {};
useEffect(() =>{
    getProducts();
},[]); 
useEffect(() =>{},[time]); // work every time when has changed effect in this page


return <p>Timer: {time} seconds</p>;
};
export default Timer;