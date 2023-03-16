import React from "react";
import { useSwiper } from "swiper/react";
import CarousalRightButton from "./CarousalRightButton.png";

const CarousalRight = () => {
  const swiper = useSwiper();
  const nextSlide = () => {
    swiper.slideNext();
  };
  return (
    <div
      style={{
        cursor: "pointer",
        position: "absolute",
        accentColor: "white",
        top: "40%",
        right: "10px",
        zIndex: "5",
        transform: "translateY(-50%)",
      }}
      onClick={nextSlide}
    >
      <img
        src={CarousalRightButton}
        alt="CarousalRightButton"
        style={{ backgroundColor: "white", borderRadius: "50%" }}
      />
    </div>
  );
};

export default CarousalRight;
