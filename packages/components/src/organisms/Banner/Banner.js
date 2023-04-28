import PropTypes from "prop-types";
import Aspect from "../../atoms/Aspect/Aspect";
import BannerContent from "../../molecules/BannerContent/BannerContent";
import { getClassBannerImage } from "../../helpers/classesHelper";
const bannerImageStyles = {
  objectFit: "cover",
  filter: "brightness(0.5)",
};
const defaultValues = {
  ratio: "1/2",
  overlay: "normal",
  variant: false,
  size: "lg",
  position: "left-top",
};
const Banner = ({
  imageUrl,
  ratio = defaultValues.ratio,
  overlay = defaultValues.overlay,
  title,
  text,
  variant = defaultValues.variant,
  btn,
  size = defaultValues.size,
  position = defaultValues.position,
}) => {
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
Banner.defaultProps = defaultValues;
export default Banner;
