import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { appReducer } from "./appReducer";
// import { sayHiOnDispatch, includeMeaningOfLife } from "@/addons/enhancer";
function loggerMiddleware(storeAPI) {
  return (next) => (action) => {
    console.log("dispatching", action);
    let result = next(action);
    return result;
  };
}

export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware))
);
