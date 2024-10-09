import React from "react";

const AdvancedFeatures = () => {
  return (
    <div className="slide">
      <h2>Advanced Features of React</h2>
      <ul>
        <li>
          <strong>Hooks</strong>: Use state and other features without writing a
          class (e.g., <code>useState</code>, <code>useEffect</code>).
        </li>
        <li>
          <strong>Context API</strong>: For global state management without prop
          drilling.
        </li>
        <li>
          <strong>React Router</strong>: Manage multi-page navigation in
          single-page applications (SPA).
        </li>
      </ul>
    </div>
  );
};

export default AdvancedFeatures;
