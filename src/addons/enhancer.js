export function sayHiOnDispatch(createStore) {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers);

    function newDispatch(action) {
      console.log("Hi!");
      return store.dispatch(action);
    }

    return {
      ...store,
      dispatch: newDispatch,
      subscribe: () => {
        console.log("this is my own subscriber from enhancer.");
      },
    };
  };
}

export function includeMeaningOfLife(createStore) {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers);

    function newGetState() {
      return {
        ...store.getState(),
        meaningOfLife: 42,
      };
    }

    return { ...store, getState: newGetState };
  };
}
