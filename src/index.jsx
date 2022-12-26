import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("State after dispatch: ", store.getState());
});

store.dispatch({ type: "todos/added", payload: "Learn about actions" });

unsubscribe();

root.render(
  <StrictMode>
    <div></div>
  </StrictMode>
);
