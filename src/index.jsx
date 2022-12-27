import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Application } from "./Application";

import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>
);
