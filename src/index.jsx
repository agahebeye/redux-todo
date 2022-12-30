import { createRoot } from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

import "tailwindcss/tailwind.css";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

function App() {
  return <></>;
}
