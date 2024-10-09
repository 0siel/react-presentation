import React from "react";
import reactLogo from "../assets/logo512.png";

const ThankYouSlide = () => {
  return (
    <div className="thank-you-slide">
      <h2>Thank You!</h2>
      <p>For watching this React presentation</p>
      <img src={reactLogo} className="react-logo" alt="React Logo" />
      <p>Keep learning and building with React!</p>
    </div>
  );
};

export default ThankYouSlide;
