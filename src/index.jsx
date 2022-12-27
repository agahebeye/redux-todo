import React from "react";
import { createRoot } from "react-dom/client";

import { store } from "./store";

console.log("Initial state", store.getState());

store.dispatch({
  type: "todos/added",
  payload: "Let us learn Redux the modern way.",
});


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>hello</div>
  </React.StrictMode>
);
