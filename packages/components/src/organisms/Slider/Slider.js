// Import Swiper React components
import { useRef } from "react";
import Controls from "../../atoms/Controls/Controls";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Aspect from "../../atoms/Aspect/Aspect";
import SliderContent from "../../molecules/SliderContent/SliderContent";
import PropTypes from "prop-types";
const sliderImageStyles = {
  dark: { filter: "brightness(0.5)" },
  light: { opacity: "0.5" },
};

const Slider = ({ slides }) => {
  const naviPrevRef = useRef(null);
  const navNextRef = useRef(null);

  return (
    <div>
      <div className="hidden md:flex relative h-fit">
        <div
          ref={naviPrevRef}
          className=" absolute  cursor-pointer z-10 bottom-2/4 left-8 bg-neutral-100 opacity-50 hover:shadow-lg flex  rounded-lg w-14 h-14 items-center justify-center align-center"
        >
          <Controls iconName="arrow_back_ios" />
        </div>
        <div
          ref={navNextRef}
          className="absolute cursor-pointer z-10 bottom-2/4 right-8  bg-neutral-100 opacity-50 hover:shadow-lg flex  rounded-lg w-14 h-14 items-center justify-center"
        >
          <Controls iconName="arrow_forward_ios" />
        </div>
        <Swiper
          navigation={{
            nextEl: navNextRef.current,
            prevEl: naviPrevRef.current,
          }}
          loop={true}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = naviPrevRef.current;
              swiper.params.navigation.nextEl = navNextRef.current;
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
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          className="slides"
        >
          {slides?.map((slide, indexSlide) => (
            <SwiperSlide key={indexSlide}>
              <Aspect ratio="2/1">
                <img
                  style={sliderImageStyles?.[slide?.overlay]}
                  className="w-full h-full object-cover object-center"
                  src={slide?.url}
                  alt="slider-img"
                />
                <div className="absolute w-full h-full top-0 left-0 p-">
                  <SliderContent
                    title={slide?.title}
                    text={slide?.text}
                    btn={slide?.btn}
                    contentVariant={slide?.contentVariant}
                    position={slide?.position}
                    className={slide?.className}
                  />
                </div>
              </Aspect>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" flex md:hidden">
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
            horizontalClass: "ccIndicators",
            bulletClass: "ccBullets",
            bulletActiveClass: "ccBulletsActive",
          }}
          slidesPerView={1}
          modules={[Pagination]}
          className="slides"
        >
          {slides?.map((slide, indexSlide) => (
            <SwiperSlide key={indexSlide}>
              <div className="flex flex-col pb-6">
                <Aspect ratio="1/1">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={slide?.url}
                    alt="slider-img"
                  />
                </Aspect>
                <div>
                  <SliderContent
                    title={slide?.title}
                    text={slide?.text}
                    btn={slide?.btn}
                    contentVariant={slide?.contentVariant}
                    position={slide?.position}
                    className={slide?.className}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
Slider.propTypes = { slides: PropTypes.array };
Slider.defaultProps = { slides: [{}] };
export default Slider;
