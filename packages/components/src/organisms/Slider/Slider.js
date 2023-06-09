import Aspect from "../../atoms/Aspect/Aspect";
import { useState } from "react";
import cn from "classnames";
import SliderContent from "../../molecules/SliderContent/SliderContent";

import { useKeenSlider } from "keen-slider/react";
const sliderImageStyles = {
  dark: { filter: "brightness(0.5)" },
  light: { opacity: "0.5" },
};
const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const stylesBaseControls =
    "material-icons select-none absolute top-[35%] p-1 rounded-lg text-[12px] w-p:hidden";
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1 },
      },
      "(min-width: 600px)": {
        slides: { perView: 1 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 1 },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const activeBulletSlide = (position) => {
    instanceRef.current?.moveToIdx(position);
  };

  return (
    <section className="flex flex-col relative w-full my-6">
      <section className="">
        {" "}
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, i) => (
            <section key={`card-item-${i}`}>
              <div className="keen-slider__slide">
                <Aspect ratio="2/1">
                  <img
                    style={sliderImageStyles?.[slide?.overlay]}
                    className="w-full h-full object-cover object-center"
                    src={slide?.url}
                    alt="slider-img"
                  />
                  <div className="absolute w-full h-full top-0 left-0 ">
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
              </div>
            </section>
          ))}{" "}
        </div>
      </section>
      {loaded && instanceRef.current && (
        <>
          <div
            className={cn(
              "z-20 left-8 w-p:invisible w-t:invisible cursor-pointer w-14 h-14 rounded-lg bg-neutral-200 opacity-50 flex items-center justify-center ",
              stylesBaseControls
            )}
          >
            <span
              className="material-icons"
              onClick={(e) => {
                instanceRef.current?.prev();
              }}
            >
              arrow_back_ios
            </span>
          </div>
          <div
            className={cn(
              "z-20 right-8 w-p:invisible w-t:invisible cursor-pointer  w-14 h-14 rounded-lg bg-neutral-200 opacity-50 flex items-center justify-center",
              stylesBaseControls
            )}
          >
            <span
              className="material-icons"
              onClick={(e) => instanceRef.current?.next()}
            >
              arrow_forward_ios
            </span>
          </div>
          <div
            className={cn(
              "w-full flex justify-center gap-2 mt-6 dots absolute bottom-1 pb-10"
            )}
          >
            {slides.map((_, i) => (
              <div
                key={`bullet-item-${i}`}
                onClick={() => activeBulletSlide(i)}
                className={cn("h-4 bg-[#686868] rounded-full cursor-pointer", {
                  "w-4": i !== currentSlide,
                  "w-8": i === currentSlide,
                })}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
export default Slider;
