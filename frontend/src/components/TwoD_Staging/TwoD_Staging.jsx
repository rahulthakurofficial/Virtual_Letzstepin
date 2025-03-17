import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowsAltH, FaTag } from "react-icons/fa";
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

  const beforeImages = [ "/flat1.webp", "/flat21.jpg", "/flat31.jpg","/flat41.jpg"];
  const afterImages = [ "/flat5.jpg", "/flat6.jpg", "/flat7.jpg", "/flat8.jpg"];
  
  const prices = ["10k", "20k", "30k", "40k"];

  return (
    <div className="twoD-container">
      {/* Heading */}
      <motion.h1
        className="photo-staging-heading"
        style={{ textAlign: "center", marginTop: "90px" }}
        whileHover={{ color: "orange", scale: 1.1 }}
      >
        2D Photo Virtual Staging
      </motion.h1>

      {/* Image Slider Section */}
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
                  {/* Before Image */}
                  <img src={before} className="before-image" alt={`Before ${index + 1}`} />

                  {/* After Image */}
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

                  {/* Price Tag */}
                  <motion.div
                    className="price-tag"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaTag className="tag-icon" />
                    {prices[index % prices.length]}
                  </motion.div>
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
