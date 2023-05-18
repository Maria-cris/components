// Import Swiper React components
import { useRef } from "react";
import Controls from "../../atoms/Controls/Controls";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Card from "../Card";
import Aspect from "../../atoms/Aspect/Aspect";
import PropTypes from "prop-types";

const defaultValues = {
  variant: "img",
};

const Carrusel = ({ data, variant = defaultValues.variant }) => {
  const naviPrevRef = useRef(null);
  const navNextRef = useRef(null);

  return (
    <div>
      <div className="w-full h-full  absolute hidden lg:flex px-28 ">
        <div
          ref={naviPrevRef}
          className=" absolute bottom-1/2 left-16 hidden lg:flex bg-neutral-100 hover:shadow-lg hover:shadow-neutral-500 rounded-lg"
        >
          <Controls iconName="arrow_back_ios" />
        </div>
        <div
          ref={navNextRef}
          className="absolute bottom-1/2 right-16 hidden lg:flex bg-neutral-100 hover:shadow-lg hover:shadow-neutral-500 rounded-lg"
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
          slidesPerView={3}
          spaceBetween={24}
          slidesPerGroupSkip={3}
          modules={[Navigation, Pagination]}
          className="slides"
        >
          <div className=" flex flex-row">
            {data?.map((card, indexCard) =>
              variant === "img" ? (
                <SwiperSlide key={indexCard}>
                  <div className="w-full h-fit align-top items-top justify-center pb-6">
                    <div className="w-full h-fit relative flex pb-6">
                      <Aspect ratio="1/1">
                        <img
                          className="w-full h-full object-cover object-center"
                          src={card?.imageUrl}
                          alt="card-img"
                        />
                      </Aspect>
                    </div>
                  </div>
                </SwiperSlide>
              ) : (
                <SwiperSlide key={indexCard}>
                  <div className="w-full h-full align-top items-top justify-center pb-6 flex ">
                    <div className="w-full h-full relative flex pb-6 ">
                      <Card
                        imageUrl={card?.imageUrl}
                        title={card?.title}
                        text={card?.text}
                        subtitle={card?.subtitle}
                        type="vertical"
                        aspectRatio="2/1"
                        link={card?.link}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </div>
        </Swiper>
      </div>
      <div className="w-full h-fit absolute hidden lg:hidden md:flex ">
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
            horizontalClass: "ccIndicators",
            bulletClass: "ccBullets",
            bulletActiveClass: "ccBulletsActive",
          }}
          slidesPerView={2}
          spaceBetween={24}
          centeredSlides={true}
          modules={[Pagination]}
          className="slides"
          watchSlidesProgress={true}
        >
          {data?.map((card, indexCard) =>
            variant === "img" ? (
              <SwiperSlide key={indexCard}>
                <div className="w-full h-fit align-top items-top justify-center pb-6">
                  <div className="w-full h-fit relative flex pb-6">
                    <Aspect ratio="1/1">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={card?.imageUrl}
                        alt="card-img"
                      />
                    </Aspect>
                  </div>
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={indexCard}>
                <div className="w-full h-fit align-top items-top justify-center pb-6 ">
                  <div className="w-full h-fit relative flex pb-6">
                    <Card
                      imageUrl={card?.imageUrl}
                      title={card?.title}
                      text={card?.text}
                      subtitle={card?.subtitle}
                      type="vertical"
                      aspectRatio="2/1"
                      link={card?.link}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      <div className="w-full h-fit absolute  md:hidden sm:flex px-10">
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
            horizontalClass: "ccIndicators",
            bulletClass: "ccBullets",
            bulletActiveClass: "ccBulletsActive",
          }}
          slidesPerView={1}
          spaceBetween={32}
          modules={[Pagination]}
          className="slides"
          watchSlidesProgress={true}
        >
          {data?.map((card, indexCard) =>
            variant === "img" ? (
              <SwiperSlide key={indexCard}>
                <div className="w-full h-fit align-top items-top justify-center pb-6 ">
                  <div className="w-full h-fit relative flex pb-6">
                    <Aspect ratio="1/1">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={card?.imageUrl}
                        alt="card-img"
                      />
                    </Aspect>
                  </div>
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={indexCard}>
                <div className="w-full h-fit align-top items-top justify-center pb-6 ">
                  <div className="w-full h-fit relative flex pb-6">
                    <Card
                      imageUrl={card?.imageUrl}
                      title={card?.title}
                      text={card?.text}
                      subtitle={card?.subtitle}
                      type="vertical"
                      aspectRatio="2/1"
                      link={card?.link}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};
Carrusel.propTypes = {
  variant: PropTypes.oneOf("img", "card"),
  data: PropTypes.array,
};
Carrusel.defaultProps = defaultValues;
export default Carrusel;
