import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import cn from "classnames";

const Carrusel = () => {
  return (
    <div>
      <Swiper
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
          horizontalClass: "ccIndicators",
          bulletClass: "ccBullets",
          bulletActiveClass: "ccBulletsActive",
        }}
        slidesPerView={"1"}
        className="slides"
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrusel;
