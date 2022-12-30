import { createRoot } from "react-dom/client";
import "tailwindcss/tailwind.css";
import { store } from "./store";

const subscriber = store.subscribe(() =>
  console.log("state", store.getState().todos.items)
);

store.dispatch({ type: "todos/added", payload: "Wash dishes" });
store.dispatch({ type: "todos/added", payload: "Meet my girlfriend" });

subscriber();

createRoot(document.getElementById("root")).render(
  <div className="app">hello I am back again.</div>
);
