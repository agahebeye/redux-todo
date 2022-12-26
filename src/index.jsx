import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

store.dispatch({ type: "todos/added", payload: "Learn about actions" });

root.render(
  <StrictMode>
    <div></div>
  </StrictMode>
);
