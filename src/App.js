import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const goToNext = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const slides = [
    <div className="slide">
      <h1>Slide 1</h1>
      <h2>Welcome to the react presentation</h2>
      <p>This is the first slide. Let's learn React!</p>
    </div>,
    <div className="slide">
      <h2>What is react?</h2>
      <p>React is a JavaScript library for building user interfaces.</p>
    </div>,
  ];

  return (
    <div className="App">
      {slides[currentSlide]}
      <div className="navigation">
        <button onClick={goToPrev} disabled={currentSlide === 0}>
          Previous
        </button>
        <span>{currentSlide + 1} / {slides.length}</span>
        <button onClick={goToNext} disabled={currentSlide === slides.length - 1}>
          Next
        </button>
          

      </div>
    </div>
  )
}

export default App;
