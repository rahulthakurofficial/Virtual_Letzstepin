import React, { useState, useRef } from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';
import { FaArrowsAltH } from "react-icons/fa"; 
import "./TwoD_Staging.scss";

function TwoD_Staging() {
  const [sliderPositions, setSliderPositions] = useState([50, 50, 50]);
  const sliderRefs = [useRef(null), useRef(null), useRef(null)];

  const handleMouseMove = (e, index) => {
    if (!sliderRefs[index].current) return;
    const rect = sliderRefs[index].current.getBoundingClientRect();
    const yPos = ((e.clientX - rect.left) / rect.width) * 100;

    setSliderPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index] = Math.min(100, Math.max(0, yPos));
      return newPositions;
    });
  };

  const beforeImages = [ "/flat.avif", "/flat.avif", "/flat3.avif", "/flat.avif"];
  const afterImages = ["/flat2.avif", "/flat2.avif", "/flat4.avif","/flat2.avif"];

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "90px" }}>
        2D Photo Virtual Staging
      </h2>
      <div className="virtual-staging-container">
        <section className="image-slider">
          <div className="slider-container">
            <div className="slider-wrapper">
              {beforeImages.map((before, index) => (
                <div
                  key={index}
                  className="image-box"
                  ref={sliderRefs[index % 3]}
                  onMouseMove={(e) => handleMouseMove(e, index % 3)}
                >
                  <img src={before} className="before-image" alt={`Before ${index + 1}`} />
                  <img
                    src={afterImages[index % afterImages.length]}
                    className="after-image"
                    alt={`After ${index + 1}`}
                    style={{ clipPath: `inset(0 ${100 - sliderPositions[index % 3]}% 0 0)` }}
                  />
                  {/* Slide Icon */}
                  <div className="slide-icon">
                    <FaArrowsAltH />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TwoD_Staging;
