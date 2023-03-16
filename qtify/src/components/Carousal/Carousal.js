import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousal.module.css";
import CarousalLeft from "./CarousalLeft";
import CarousalRight from "./CarousalRight";

const Carousal = ({ data, renderReturn }) => {
  // const swiper = useSwiper();

  return (
    <div>
      <Swiper spaceBetween={40} slidesPerView={"auto"}>
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
