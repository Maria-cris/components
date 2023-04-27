import Aspect from "../../atoms/Aspect/Aspect";
import PropTypes from "prop-types";
import "../../index.css";
import { getClassBannerImage } from "../../helpers/classesHelper";
import BannerContent from "../../molecules/BannerContent/BannerContent";

const Banner = ({
  imageUrl,
  ratio,
  overlay,
  title,
  text,
  variant,
  btn,
  size,
  position,
}) => {
  const bannerImageStyles = {
    objectFit: "cover",
    filter: "brightness(0.5)",
  };

  return (
    <div>
      <div className="hidden xl:block lg:block md:block  ">
        <Aspect ratio={ratio}>
          <img
            className={getClassBannerImage(overlay)}
            style={
              overlay === "dark" ? bannerImageStyles : { objectFit: "cover" }
            }
            src={imageUrl}
            alt="image Banner"
          />
          <BannerContent
            title={title}
            text={text}
            btn={{
              id: btn.id,
              label: btn.label,
              type: variant ? "outlined" : "primary",
              size: size,
            }}
            variant={variant}
            size={size}
            position={position}
            mobile={false}
          />
        </Aspect>
      </div>
      <div className="lg:hidden md:hidden flex flex-col gap-1 ">
        <div className="w-full h-full flex relative ">
          <Aspect ratio="4/3">
            <img
              src={imageUrl}
              className="w-full h-full"
              alt="img-banner-mobile"
            />
          </Aspect>
        </div>
        <div>
          <BannerContent
            title={title}
            text={text}
            variant="false"
            btn={{
              id: btn?.id,
              label: btn?.label,
              type: "primary",
            }}
          />
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  imageUrl: PropTypes.string,
  ratio: PropTypes.string,
  overlay: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.bool,
  btn: PropTypes.object,
  size: PropTypes.string,
  position: PropTypes.string,
};
Banner.defaultProps = {
  variant: "normal",
  overlay: "no",
};
export default Banner;
