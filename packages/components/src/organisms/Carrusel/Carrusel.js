// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Card from "../Card";
import Aspect from "../../atoms/Aspect/Aspect";
import "swiper/css/bundle";
const Carrusel = () => {
  return (
    <div className="w-full h-fit">
      <Swiper
        className="slides"
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
          horizontalClass: "ccIndicators",
          bulletClass: "ccBullets",
          bulletActiveClass: "ccBulletsActive",
        }}
        slidesPerView={"1"}
        modules={[Navigation, Pagination]}
      >
        <div className="w-full h-fit ">
          <SwiperSlide key={1}>
            <div className="w-full h-fit align-top items-top justify-center pb-6">
              <div className="flex w-full h-fit relative flex-row justify-center gap-6 px-20 pb-6 ">
                <div className="w-80 h-80 relative flex">
                  <Aspect ratio="1/1">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://wallpapercave.com/wp/wp2599594.jpg"
                      alt="card-img"
                    />
                  </Aspect>
                </div>
                <div className="w-80 h-80 relative flex">
                  <Aspect ratio="1/1">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://wallpapercave.com/wp/wp2599594.jpg"
                      alt="card-img"
                    />
                  </Aspect>
                </div>
                <div className="w-80 h-80 relative flex">
                  <Aspect ratio="1/1">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://wallpapercave.com/wp/wp2599594.jpg"
                      alt="card-img"
                    />
                  </Aspect>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={2}>
            <div className="w-full h-fit align-top items-top justify-center pb-6 ">
              <div className="flex absolute w-full h-fit relative flex-row gap-2  px-20 pb-6">
                <Card
                  imageUrl="https://wallpapercave.com/wp/wp2599594.jpg"
                  title="Demo Card"
                  text="Demo Card"
                  subtitle="subtitle"
                  type="vertical"
                  link={{
                    label: "Ver más",
                    route: "https://jonsuh.com/hamburgers/",
                  }}
                />
                <Card
                  imageUrl="https://wallpapercave.com/wp/wp2599594.jpg"
                  title="Demo Card"
                  text="Demo Card"
                  subtitle="subtitle"
                  type="vertical"
                  link={{
                    label: "Ver más",
                    route: "https://jonsuh.com/hamburgers/",
                  }}
                />
                <Card
                  imageUrl="https://wallpapercave.com/wp/wp2599594.jpg"
                  title="Demo Card"
                  text="Demo Card"
                  subtitle="subtitle"
                  type="vertical"
                  link={{
                    label: "Ver más",
                    route: "https://jonsuh.com/hamburgers/",
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Carrusel;
