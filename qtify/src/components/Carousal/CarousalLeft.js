import React from "react";
import { useSwiper } from "swiper/react";
import CarousalLeftButton from "./CarousalLeftButton.png";

const CarousalLeft = () => {
  const swiper = useSwiper();
  const prevSlide = () => {
    swiper.slidePrev();
  };
  return (
    <div
      style={{
        cursor: "pointer",
        position: "absolute",
        left: "10px",
        accentColor: "white",
        top: "40%",
        zIndex: "5",
        transform: "translateY(-50%)",
      }}
      onClick={prevSlide}
    >
      <img
        src={CarousalLeftButton}
        alt="CarousalLeftButton"
        style={{ backgroundColor: "white", borderRadius: "50%" }}
      />
    </div>
  );
};

export default CarousalLeft;
