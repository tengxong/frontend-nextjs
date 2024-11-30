// app/api-example/page.tsx
"use client";
import { useState, useEffect } from 'react';
const APIExample = () => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/hello");
            const data = await res.json();
            setMessage(data.message);
        };
        fetchData();
    }, []);
    return <p>{message}</p>;
};
export default APIExample;