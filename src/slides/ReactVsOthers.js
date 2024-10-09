import React from "react";

const ReactVsOthers = () => {
  return (
    <div className="slide">
      <h2>React vs Other JavaScript Frameworks</h2>
      <ul>
        <li>
          <strong>React vs Angular</strong>: Declarative UI and one-way data
          flow vs two-way data binding.
        </li>
        <li>
          <strong>React vs Vue</strong>: React is more flexible, Vue is simpler
          and has a more integrated setup.
        </li>
        <li>
          <strong>React vs Svelte</strong>: React uses a Virtual DOM, while
          Svelte compiles at build time for improved performance.
        </li>
      </ul>
    </div>
  );
};

export default ReactVsOthers;
