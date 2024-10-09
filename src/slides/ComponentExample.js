//A basic component example, code snippet in the left column, rendered output in the right column

import React from "react";

const ExampleComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="example-component">
      <h3>Interactive React Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const ComponentExampleSlide = () => {
  return (
    <div className="slide flex-container">
      <div className="code-section">
        <pre>
          {`const ExampleComponent = () => {
  const [count, setCount] = React.useState(0);

  return(
    <div className="example-component">
      <h3>Interactive React Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`}
        </pre>
      </div>
      <div className="component-section">
        <ExampleComponent />
      </div>
    </div>
  );
};

export default ComponentExampleSlide;
