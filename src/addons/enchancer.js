export function sayHello(createStore) {
  return function (reducer, preloadedState, enchancer) {
    const store = createStore(reducer, preloadedState, enchancer);

    return {
      ...store,
      getState() {
        return {
          ...store.getState(),
          name: "gahebeye",
        };
      },
    };
  };
}
