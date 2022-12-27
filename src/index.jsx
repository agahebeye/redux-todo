import React from "react";
import { createRoot } from "react-dom/client";

import { store } from "./store";
console.log(store.getState());

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>hello</div>
  </React.StrictMode>
);
