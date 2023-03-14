import React from "react";
import { useSwiper } from "swiper/react";
import CarousalLeftButton from "./CarousalLeftButton.png";

const CarousalRight = () => {
  const swiper = useSwiper();
  const prevSlide = () => {
    swiper.slidePrev();
  };
  return (
    <div
      style={{
        cursor: "pointer",
        position: "absolute",
        accentColor: "white",
        top: "40%",
        left: "0",
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

export default CarousalRight;
