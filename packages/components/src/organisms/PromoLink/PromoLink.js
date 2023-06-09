import PropTypes from "prop-types";
import Icon from "../../atoms/Icon";
import cn from "classnames";
import { myhref } from "../../helpers/myrefHelper";
import { getTextCount } from "../../helpers/textHelper";
import Aspect from "../../atoms/Aspect/Aspect";
import Heading from "../../atoms/Heading/Heading";

const colors = {
  color1: "border-outstanding-100 shadow-outstanding-100",
  color2: "border-outstanding-200 shadow-outstanding-200",
  color3: "border-outstanding-300 shadow-outstanding-300",
  color4: "border-outstanding-400 shadow-outstanding-400",
  color5: "border-neutral-500 shadow-neutral-500",
  color6: "border-neutral-800 shadow-neutral-800",
  color7: "border-neutral-900 shadow-neutral-900",
};
const colorsImg = {
  color1: "bg-outstanding-100 ",
  color2: "bg-outstanding-200 ",
  color3: "bg-outstanding-300 ",
  color4: "bg-outstanding-400 ",
  color5: "bg-neutral-500 ",
  color6: "bg-neutral-800 ",
  color7: "bg-neutral-900 ",
};
const defaultValues = {
  color: "color1",
  onClick: () => {},
};

const PromoLink = ({
  text,
  link,
  variant,
  className = "",
  color,
  onClick,
  imgUrl,
}) => {
  const handleOnClick = (e) => {
    if (!link) {
      e.stopPropagation();
    } else if (link) {
      myhref(link);
    } else {
      link?.onClick();
    }
  };
  return (
    <div className="flex flex-1">
      <div
        id="promo-link-shadow"
        className={cn(
          "hidden",
          "h-full w-full rounded border p-4  shadow-lb bg-neutral-100 cursor-pointer",
          className,
          [colors[color]]
        )}
        onClick={handleOnClick}
      >
        <div className="font-principal font-bold">
          <span href={link}>{getTextCount(text, 52)}</span>
        </div>
        <div className=" w-full font-principal flex font-bold relative justify-end ">
          <span href={link}>
            <Icon iconName="arrow_forward" />
          </span>
        </div>
      </div>
      <div
        className={cn(
          "h-fit w-full rounded mix-blend-multiply bg-blend-multiply flex  ",
          [colorsImg[color]]
        )}
      >
        <Aspect ratio="1/1">
          <img
            src={imgUrl}
            className="w-full h-full object-cover object-center mix-blend-multiply bg-blend-multiply "
          />
          <div
            className="w-full h-full absolute top-0 left-0 p-4 flex flex-col justify-between text-neutral-100 cursor-pointer group"
            onClick={handleOnClick}
          >
            <div className="flex font-principal font-bold">
              <Heading title={getTextCount(text, 52)} type="h-5" />
            </div>
            <div className=" w-full font-principal flex font-bold  justify-end ">
              <span href={link} className="group-hover:animate-ping">
                <Icon iconName="arrow_forward" />
              </span>
            </div>
          </div>
        </Aspect>
      </div>
    </div>
  );
};
PromoLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,

  color: PropTypes.oneOf([
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

PromoLink.defaultProps = defaultValues;
export default PromoLink;
