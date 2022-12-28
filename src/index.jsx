import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Application } from "./Application";

import "./api/server";
import { store } from "./store";
import { fetchTodos } from "./components/todos/todosReducer";

store.dispatch(fetchTodos);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>
);
