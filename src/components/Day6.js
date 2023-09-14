import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// Step 1: Define Redux Actions and Reducer
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// Step 2: Create Redux Store
const store = createStore(counterReducer);

// Step 3: Create React Components
const HomeCom = ({ count, increment, decrement }) => {
  return (
    <div className="d-flex justify-content-center">
      <h4 className="mx-4">Count: {count}</h4>
      <div className="d-flex gap-4">
        <button className="btn btn-primary" onClick={increment}>
          Increment
        </button>
        <button className="btn btn-dark" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const ConnectedHomeCom = connect(mapStateToProps, { increment, decrement })(
  HomeCom
);

// Step 4: Render the HomeComlication
const Day6 = () => {
  return (
    <Provider store={store}>
      <ConnectedHomeCom />
    </Provider>
  );
};

export default Day6;
