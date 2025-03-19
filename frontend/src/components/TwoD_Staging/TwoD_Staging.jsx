// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaArrowsAltH, FaTag } from "react-icons/fa";
// import "./TwoD_Staging.scss";

// function TwoD_Staging() {
//   const [sliderPositions, setSliderPositions] = useState([50, 50, 50, 50]);
//   const sliderRefs = useRef([]);

//   const handleMouseMove = (e, index) => {
//     if (!sliderRefs.current[index]) return;
//     const rect = sliderRefs.current[index].getBoundingClientRect();
//     const yPos = ((e.clientX - rect.left) / rect.width) * 100;

//     setSliderPositions((prevPositions) => {
//       const newPositions = [...prevPositions];
//       newPositions[index] = Math.min(100, Math.max(0, yPos));
//       return newPositions;
//     });
//   };

//   const beforeImages = [ "/flat1.webp", "/flat21.jpg", "/flat31.jpg", "/flat41.jpg"];
//   const afterImages = [ "/flat5.jpg", "/flat6.jpg", "/flat7.jpg", "/flat8.jpg"];
//   const prices = ["10k", "20k", "30k", "40k"];

//   return (
//     <div className="twoD-container">
//       <motion.h1
//         className="photo-staging-heading"
//         style={{ textAlign: "center", marginTop: "90px" }}
//         whileHover={{ color: "orange", scale: 1.1 }}
//       >
//         2D Photo Virtual Staging
//       </motion.h1>

//       <div className="virtual-staging-container">
//         <section className="image-slider">
//           <div className="slider-container">
//             <div className="slider-wrapper">
//               {beforeImages.map((before, index) => (
//                 <div
//                   key={index}
//                   className="image-box"
//                   ref={(el) => (sliderRefs.current[index] = el)}
//                   onMouseMove={(e) => handleMouseMove(e, index)}
//                 >

//                   <img src={before} className="before-image" alt={`Before ${index + 1}`} />

//                   <img
//                     src={afterImages[index]}
//                     className="after-image"
//                     alt={`After ${index + 1}`}
//                     style={{ clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)` }}
//                   />

//                   <div className="slide-icon">
//                     <FaArrowsAltH />
//                   </div>

//                   <motion.div
//                     className="price-tag"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <FaTag className="tag-icon" />
//                     {prices[index]}
//                   </motion.div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default TwoD_Staging;

import React, { useState, useRef } from "react";
import "./TwoD_Staging.scss";

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
        <button className="buy-now-btn">Buy Now</button>
      </div>

      {/* Price Added */}
    </div>
  );
};

const TwoD_Staging = () => {
  return (
    <div className="outer-box">
      <h2 className="staging-heading">
        Revamp Your Home – Visualize the Difference!
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
