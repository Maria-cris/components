import PropTypes from "prop-types";
import Aspect from "../../atoms/Aspect/Aspect";
import BannerContent from "../../molecules/BannerContent/BannerContent";
import cn from "classnames";
const bannerImageStyles = {
  dark: { filter: "brightness(0.5)" },
  light: { opacity: "0.5" },
};
const defaultValues = {
  ratio: "2/1",
  overlay: "normal",
  contentVariant: "dark",
  size: "lg",
  position: "left-top",
  className: "",
};
const classBannerImage = cn("w-full h-full object-cover object-center");
const Banner = ({
  imageUrl,
  ratio = defaultValues.ratio,
  overlay = defaultValues.overlay,
  title,
  text,
  contentVariant = defaultValues.contentVariant,
  btn,
  size = defaultValues.size,
  position = defaultValues.position,
  className = defaultValues.className,
}) => {
  return (
    <div className={className}>
      <div className="hidden xl:block lg:block md:block  ">
        <Aspect ratio={ratio}>
          <img
            className={classBannerImage}
            style={bannerImageStyles?.[overlay]}
            src={imageUrl}
            alt="image Banner"
          />
          <BannerContent
            title={title}
            text={text}
            btn={{
              id: btn.id,
              label: btn.label,
              variant: contentVariant ? "outlined" : "primary",
              size: size,
              iconName: btn?.iconName,
            }}
            contentVariant={contentVariant}
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
              className="w-full h-full object-cover object-center"
              alt="img-banner-mobile"
            />
          </Aspect>
        </div>
        <div>
          <BannerContent
            title={title}
            text={text}
            contentVariant="dark"
            btn={{
              id: btn?.id,
              label: btn?.label,
              variant: "primary",
              iconName: btn?.iconName,
            }}
          />
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  ratio: PropTypes.string,
  overlay: PropTypes.oneOf(["dark", "light", "no-overlay"]),
  title: PropTypes.string,
  text: PropTypes.string,
  contentVariant: PropTypes.oneOf(["dark", "light"]),
  btn: PropTypes.object,
  size: PropTypes.oneOf(["lg", "md", "sm"]),
  position: PropTypes.oneOf([
    "left-top",
    "left-middle",
    "left-bottom",
    "center-top",
    "center-middle",
    "center-bottom",
    "right-top",
    "right-middle",
    "right-bottom",
  ]),
  className: PropTypes.string,
};
Banner.defaultProps = defaultValues;
export default Banner;
