import { createRoot } from "react-dom/client";
import "tailwindcss/tailwind.css";
import { store } from "./store";

const subscriber = store.subscribe(() =>
  console.log("state", store.getState().todos.items)
);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });

subscriber();

createRoot(document.getElementById("root")).render(
  <div className="app">hello I am back again.</div>
);
