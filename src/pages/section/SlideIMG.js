import React from "react";
import { Zoom, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import imgProfile from "../../assets/profile.jpg";
import imgProfile2 from "../../assets/profile2.jpg";
import imgProfile3 from "../../assets/profile3.jpg";

const SlideIMG = () => {
  const images = [imgProfile, imgProfile2, imgProfile3];

  const settingSlide = {
    duration: 5000,
    transitionDuration: 1000,
    arrows: false,
    indicators: false,
  };

  return (
    <Zoom {...settingSlide}>
      {images.map((each, index) => (
        <div key={index}>
          <img
            src={each}
            alt="Slide Image"
            className="w-screen lg:w-auto lg:h-[calc(100svh-85px)] max-h-[1200px] object-contain"
          />
        </div>
      ))}
    </Zoom>
  );
};

export default SlideIMG;
