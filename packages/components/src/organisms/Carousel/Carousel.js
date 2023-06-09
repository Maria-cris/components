import Aspect from "../../atoms/Aspect/Aspect";
import { useState } from "react";
import cn from "classnames";
import Card from "../Card";

import { useKeenSlider } from "keen-slider/react";

const Carousel = ({ data, variant }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const stylesBaseControls =
    "material-icons select-none absolute top-[35%] p-1 rounded-lg text-[12px] w-p:hidden";
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 24 },
      },
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
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
      <section className="lg:w-[90%] md:w-[95%] sm:w-[90%] mx-auto">
        <div ref={sliderRef} className="keen-slider ">
          {data.map((card, i) => (
            <section key={`card-item-${i}`}>
              {variant === "card" ? (
                <div className="keen-slider__slide h-full">
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
              ) : (
                <div className="keen-slider__slide">
                  <Aspect ratio="1/1">
                    <img
                      className="w-full h-full object-cover object-center"
                      src={card?.imageUrl}
                      alt="card-img"
                    />
                  </Aspect>
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
      {loaded && instanceRef.current && (
        <>
          <div
            className={cn(
              "z-20 left-0 w-p:invisible w-t:invisible cursor-pointer",
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
              "z-20 right-0 w-p:invisible w-t:invisible cursor-pointer",
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
          <div className={cn("w-full flex justify-center gap-2 mt-6 dots")}>
            {data.map((_, i) => (
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
export default Carousel;
