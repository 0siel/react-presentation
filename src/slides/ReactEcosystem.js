import React from "react";

const ReactEcosystem = () => {
  return (
    <div className="slide">
      <h2>The React Ecosystem</h2>
      <ul>
        <li>
          <strong>Tools and Libraries</strong>:
          <ul>
            <li>
              <strong>Redux</strong>: State management for complex applications.
            </li>
            <li>
              <strong>Next.js</strong>: React framework for server-side
              rendering and static site generation.
            </li>
            <li>
              <strong>Styled Components</strong>: CSS-in-JS styling solution.
            </li>
          </ul>
        </li>
        <li>
          <strong>Supporting Technologies</strong>:
          <ul>
            <li>
              <strong>Webpack</strong>: Module bundler for optimizing your React
              code.
            </li>
            <li>
              <strong>Babel</strong>: JavaScript compiler to support older
              browsers.
            </li>
            <li>
              <strong>Vite</strong>: Fast development server and build tool.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ReactEcosystem;
