import React, { useState } from "react";
import "./App.css";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avacado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avacado];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Zesty</h1>
        <h2>
          A photography project <br /> by Brian Palmer
        </h2>
      </div>
      <div className="image-container">
        <img alt="cabbage" src={images[currentImage]} onClick={nextImage} />
      </div>
    </div>
  );
};

export default App;
