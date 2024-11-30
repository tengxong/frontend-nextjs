"use client";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <body>{children}</body>
    </Provider>
);
}