import React, { useContext } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

const Counter = () => {
  const { count, increment, decrement } = useContext(GlobalStateContext);

  return (
    <div className="example-component">
      <h3>Global Counter</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default Counter;
