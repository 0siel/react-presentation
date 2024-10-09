import React, { useState } from "react";
import "./App.css";

import TitleSlide from "./slides/TitleSlide";
import BeforeReact from "./slides/BeforeReact";
import ReactProblems from "./slides/ReactProblems";
import WhatIsReact from "./slides/WhatIsReact";
import BasicFeatures from "./slides/BasicFeatures";
import ComponentExampleSlide from "./slides/ComponentExample";
import AdvancedFeatures from "./slides/AdvancedFeatures";
import AdvancedFeatureExample from "./slides/AdvancedFeatureExample";
import ReactEcosystem from "./slides/ReactEcosystem";
import ReactVsOthers from "./slides/ReactVsOthers";
import Conclusion from "./slides/Conclusion";
import ThankYouSlide from "./slides/ThankYouSlide";
import References from "./slides/References";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const goToNext = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const slides = [
    <TitleSlide />,
    <BeforeReact />,
    <ReactProblems />,
    <WhatIsReact />,
    <BasicFeatures />,
    <ComponentExampleSlide />,
    <AdvancedFeatures />,
    <AdvancedFeatureExample />,
    <ReactEcosystem />,
    <ReactVsOthers />,
    <Conclusion />,
    <ThankYouSlide />,
    <References />,
  ];

  return (
    <div className="App">
      {slides[currentSlide]}
      <div className="navigation">
        <button onClick={goToPrev} disabled={currentSlide === 0}>
          Previous
        </button>
        <span>
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          onClick={goToNext}
          disabled={currentSlide === slides.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
