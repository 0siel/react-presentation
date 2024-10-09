import React, { createContext, useState } from "react";

// Create a Context for the global state
export const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <GlobalStateContext.Provider value={{ count, increment, decrement }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
