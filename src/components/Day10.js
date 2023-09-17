import React from "react";
import { connect, Provider } from "react-redux";
import { init } from "@rematch/core";

// Create a Rematch model for the counter
const counter = {
  state: 0, // Initial state

  reducers: {
    // Reducer functions to update state
    increment: (state, payload) => state + payload,
    decrement: (state, payload) => state - payload,
  },
};

// Initialize the Redux store using Rematch
const store = init({
  models: { counter },
});

function Counter(props) {
  const { count, increment, decrement } = props;

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement</button>
    </div>
  );
}

// Connect the component to the Redux store using Rematch
const mapStateToProps = (state) => ({
  count: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (amount) => dispatch.counter.increment(amount),
  decrement: (amount) => dispatch.counter.decrement(amount),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

function Day10() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}

export default Day10;
