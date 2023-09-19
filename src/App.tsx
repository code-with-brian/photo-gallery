import React, { useState } from "react";
import "./App.css";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avacado from "./assets/image6.jpeg";
import { isPropertySignature } from "typescript";

const images = [cabbage, mango, fig, gaze, peach, avacado];

type LoadingProps = {
  calculatedWidth: number;
};

const Loading = ({ calculatedWidth }: LoadingProps) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favourite images...</label>
      <progress id="images-loaded" max={100} value={calculatedWidth}/>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project <br /> by Brian Palmer
        </h2>
      </header>
      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={numLoaded / images.length * 100}/>
        )}
        
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => ( 
          <img          
            key={imageURL} 
            alt="" 
            src={imageURL} 
            onClick={handleClick} 
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
