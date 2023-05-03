import { useRef } from "react";
import { getTextCount } from "../../helpers/textHelper";
import cn from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import SliderContent from "../../molecules/SliderContent";
import Controls from "../../atoms/Controls";
import Aspect from "../../atoms/Aspect";
import BannerContent from "../../molecules/BannerContent/BannerContent";

const commonClassesSliderContainer = cn(
  "box-border relative overflow-hidden w-full h-full hidden md:flex"
);

const controlLeft = cn(
  "absolute h-full w-full flex items-center justify-end pr-10 "
);
const controlRight = cn(
  "absolute h-full w-full flex items-center justify-start pl-10 "
);

const Slider = ({ slides }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div>
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
            horizontalClass: "ccIndicators",
            bulletClass: "ccBullets",
            bulletActiveClass: "ccBulletsActive",
          }}
          slidesPerView={"1"}
          modules={[Navigation, Pagination]}
          className="slides"
          effect={"coverflow"}
        >
          {slides.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="flex">
                <Aspect ratio="2/1">
                  <img
                    className={"w-full h-full flex"}
                    src={slide.url ? slide.url : ""}
                    alt="bg-image"
                    style={
                      slide?.overlay === "dark"
                        ? { filter: "brightness(50%)" }
                        : slide?.overlay === "light"
                        ? { opacity: "0.5" }
                        : {}
                    }
                  />
                </Aspect>
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

          <div ref={navigationPrevRef} className={controlLeft}>
            <Controls iconName="arrow_forward_ios" />
          </div>
          <div ref={navigationNextRef} className={controlRight}>
            <Controls iconName="arrow_back_ios" />
          </div>
        </Swiper>
      </section>
      <section className="md:hidden flex">
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
            horizontalClass: "ccIndicators",
            bulletClass: "ccBullets",
            bulletActiveClass: "ccBulletsActive",
          }}
          slidesPerView={"1"}
          modules={[Pagination]}
          className="relative flex px-8 pt-8 pb-16 h-full w-full justify-center"
        >
          {slides.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <section
                className="relative overflow-hidden flex justify-center items-center w-full "
                onClick={slide.onclickFunction ? slide.onClickFunction : ""}
              >
                <article className="relative flex w-full justify-center">
                  <div className="relative flex px-8 pt-8 pb-16 h-full w-full justify-center">
                    <div className="w-full h-full">
                      <Aspect ratio="1/1">
                        <img
                          src={slide.url ? slide.url : ""}
                          className="absolute top-0 left-0 w-full h-full"
                          alt="image-mobile"
                        />
                      </Aspect>
                      {slide.button ? (
                        <BannerContent
                          title={getTextCount(
                            slide.title ? slide.title : "",
                            58
                          )}
                          text={getTextCount(slide.text ? slide.text : "", 200)}
                          btn={slide.button}
                        />
                      ) : (
                        <BannerContent
                          title={`${slide.title ? slide.title : ""}`}
                          text={`${slide.text ? slide.text : ""}`}
                        />
                      )}
                    </div>
                    <div></div>
                  </div>
                </article>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Slider;
