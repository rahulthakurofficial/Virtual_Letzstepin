

import React, { useState, useRef } from "react";
import "./TwoD_Staging.scss";
import { FaShoppingCart } from "react-icons/fa";

const beforeImages = [
  "/flat1.webp",
  "/flat21.jpg",
  "/flat31.jpg",
  "/flat41.jpg",
];
const afterImages = ["/flat5.jpg", "/flat6.jpg", "/flat7.jpg", "/flat8.jpg"];
const prices = ["10k", "20k", "30k", "40k"]; // Added prices array

const ImageComparisonSlider = ({ beforeSrc, afterSrc, price }) => {
  const sliderRef = useRef(null);
  const sliderImgWrapperRef = useRef(null);
  const sliderHandleRef = useRef(null);
  let isDragging = false;

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const slider = sliderRef.current;
    const wrapper = sliderImgWrapperRef.current;
    const handle = sliderHandleRef.current;

    const sliderLeftX = slider.offsetLeft;
    const sliderWidth = slider.clientWidth;
    const handleWidth = handle.clientWidth;

    let mouseX = (event.clientX || event.touches?.[0]?.clientX) - sliderLeftX;
    mouseX = Math.max(0, Math.min(mouseX, sliderWidth));

    wrapper.style.width = `${((1 - mouseX / sliderWidth) * 100).toFixed(4)}%`;
    handle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(4)}% - ${
      handleWidth / 2
    }px)`;
  };

  const handleMouseDown = (event) => {
    isDragging = true;
    handleMouseMove(event);
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  return (
    <div className="comparison-box">
      <div
        className="image-comparison-slider"
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        <img src={beforeSrc} alt="before" className="before-img" />
        <div className="img-wrapper" ref={sliderImgWrapperRef}>
          <img src={afterSrc} alt="after" className="after-img" />
        </div>
        <span className="label label-before">Before</span>
        <span className="label label-after">After</span>
        <div className="handle" ref={sliderHandleRef}>
          <div className="handle-line"></div>
          <div className="handle-circle">||</div>
          <div className="handle-line"></div>
        </div>
      </div>
      <div className="price-container">
        <div className="price-tag">₹ {price}</div>
        <button className="buy-now-btn">
        <FaShoppingCart className="cart-icon" /> BUY NOW
      </button>
      </div>

      {/* Price Added */}
    </div>
  );
};

const TwoD_Staging = () => {
  return (
    <div className="outer-box">
      <h2 className="staging-heading">
        2D Photo Staging Services
      </h2>
      <div className="inner-box">
        <div className="grid-container">
          {beforeImages.map((before, index) => (
            <ImageComparisonSlider
              key={index}
              beforeSrc={before}
              afterSrc={afterImages[index]}
              price={prices[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoD_Staging;
