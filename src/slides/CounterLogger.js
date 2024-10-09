import React, { useContext, useEffect } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

const CounterLogger = () => {
  const { count } = useContext(GlobalStateContext);

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]); // This effect runs whenever `count` changes

  return (
    <div className="example-component">
      <h3>Counter Logger</h3>
      <p>Check the console for updates when the count changes!</p>
    </div>
  );
};

export default CounterLogger;
