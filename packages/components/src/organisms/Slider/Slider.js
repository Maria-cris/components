import { useRef } from "react";
import { getTextCount } from "../../helpers/textHelper";
import cn from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { getContentClassesAlign } from "@Lottus23/react/helpers/classesHelper.js";
import { getContentClassesBase } from "@Lottus23/react/helpers/classesHelper.js";
import { getImgClasses } from "@Lottus23/react/helpers/classesHelper.js";

import SliderContent from "../../molecules/SliderContent/index.js";
import Controls from "../../atoms/Controls";

import "@lottus23/styles/lib/slider.css";

const commonClassesSliderContainer = cn(
  "box-border relative overflow-hidden w-full h-full"
);
const ccIndicators = cn("absolute bottom-0 z-1 flex w-full justify-center pb-12");
const ccBullets = cn("cursor-pointer block mr-2 w-4 h-4 rounded-[50%] bg-neutral-600");
const ccBulletsActive = cn("rounded-[60px] w-8")

const ccSlide = cn("relative flex w-full h-full")


const Slider = ({ slides }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  export const getContentClassesBase = (slides, index) => {
    const classesBase = classnames("lt-desk-slider-slide-base", {
      "lt-desk-slider-content-center": slides[index].textAlign === "center",
      "lt-desk-slider-content-left": slides[index].textAlign === "left",
      "lt-desk-slider-content-right": slides[index].textAlign === "right",
      "lt-desk-slider-content-dark": slides[index].overlay === "light",
      "lt-desk-slider-content-light": slides[index].overlay === "dark",
    });
    return classesBase;
  };
  

  return (
    <section className={commonClassesSliderContainer}>
      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        loop={true}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        pagination={{
          clickable: true,
          horizontalClass: ccIndicators,
          bulletClass: ccBullets,
          bulletActiveClass: ccBulletsActive,
        }}
        slidesPerView={"1"}
        modules={[Navigation, Pagination]}
        className={ccSlide}
        effect={"coverflow"}
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="flex">
              <img
                className={"w-full h-full flex"}
                src={slide.url ? slide.url : ""}
                alt="bg-image"
                style={slide?.overlay==='dark' ? {filter: "brightness(50%)"} : slide?.overlay==='light' ? {opacity:"0.5"} :{} }
              />
                  {slide.button ? (
                    <SliderContent
                      title={getTextCount(slide.title ? slide.title : "", 58)}
                      text={getTextCount(slide.text ? slide.text : "", 200)}
                      align={`${slide.textAlign ? slide.textAlign : ""}`}
                      button={slide.button}
                    />
                  ) : (
                    <SliderContent
                      title={`${slide.title ? slide.title : ""}`}
                      text={`${slide.text ? slide.text : ""}`}
                    />
                  )}
            </div>
          </SwiperSlide>
        ))}

        <div
          ref={navigationPrevRef}
          className="lt-slider-controls-control-left"
        >
          <ControlLeft />
        </div>
        <div
          ref={navigationNextRef}
          className="lt-slider-controls-control-right"
        >
          <ControlRight />
        </div>
      </Swiper>
    </section>
  );
};

export default Slider;
