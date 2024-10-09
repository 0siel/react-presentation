import React from "react";
import { GlobalStateProvider } from "./GlobalStateContext";
import Counter from "./Counter";
import CounterLogger from "./CounterLogger";

const AdvancedFeatureExample = () => {
  return (
    <div className="slide">
      <h2>Advanced Features: Hooks and Context API Example</h2>
      <GlobalStateProvider>
        <div className="flex-container">
          <div className="example-section">
            <Counter />
          </div>
          <div className="example-section">
            <CounterLogger />
          </div>
        </div>
      </GlobalStateProvider>
    </div>
  );
};

export default AdvancedFeatureExample;
