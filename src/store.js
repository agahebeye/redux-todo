import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { loggerMiddleware } from "./addons/middleware";
import thunkMiddldeware from "redux-thunk";
import { reducer } from "./reducer";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddldeware))
);
