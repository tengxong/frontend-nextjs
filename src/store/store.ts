// store/store.ts
"use client";
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './couterSlice';
export const store = configureStore({
reducer: {
counter: counterSlice,
},
});
