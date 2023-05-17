import PropTypes from "prop-types";
import Icon from "../../atoms/Icon";
import cn from "classnames";
import { myhref } from "../../helpers/myrefHelper";

const colors = {
  color1: "border-outstanding-100 shadow-outstanding-100",
  color2: "border-outstanding-200 shadow-outstanding-200",
  color3: "border-outstanding-300 shadow-outstanding-300",
  color4: "border-outstanding-400 shadow-outstanding-400",
  color5: "border-neutral-500 shadow-neutral-500",
  color6: "border-neutral-800 shadow-neutral-800",
  color7: "border-neutral-900 shadow-neutral-900",
};
const defaultValues = {
  color: "color1",
};

const PromoLink = ({ text, link, variant, className = "", color }) => {
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
    <div
      id="promo-link-shadow"
      className={cn(
        "h-full w-full rounded border px-2 py-2 shadow-lb bg-neutral-100 cursor-pointer",
        className,
        [colors[color]]
      )}
    >
      <div className="font-principal font-bold">
        <a href={link}>{text}</a>
      </div>
      <div className=" w-full font-principal flex font-bold relative justify-end ">
        <a href={link}>
          <Icon iconName="arrow_forward" />
        </a>
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
};

PromoLink.defaultProps = defaultValues;
export default PromoLink;
