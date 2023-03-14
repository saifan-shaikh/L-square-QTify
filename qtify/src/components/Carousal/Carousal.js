import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousal.module.css";
import CarousalLeft from "./CarousalLeft";
import CarousalRight from "./CarousalRight";

const Carousal = ({ data, renderReturn }) => {
  return (
    <div>
      <Swiper
        spaceBetween={40}
        slidesPerView={"auto"}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <CarousalLeft />
        {data ? (
          <div>
            {data.map((ele) => {
              return <SwiperSlide>{renderReturn(ele)}</SwiperSlide>;
            })}
          </div>
        ) : null}
        <CarousalRight />
      </Swiper>
    </div>
  );
};

export default Carousal;
