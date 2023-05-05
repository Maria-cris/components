import PropTypes from "prop-types";
import Icon from "../../atoms/Icon";
import cn from "classnames";

const PromoLink = ({ text, route, className = "" }) => {
  return (
    <div
      className={cn(
        "h-full w-full rounded border-2 border-neutral-300 px-2 py-2",
        className
      )}
    >
      <div className="font-principal font-bold">
        <a href={route}>{text}</a>
      </div>
      <div className=" w-full font-principal flex font-bold relative justify-end ">
        <a href={route}>
          <Icon iconName="arrow_forward" />
        </a>
      </div>
    </div>
  );
};
PromoLink.propTypes = {
  text: PropTypes.string,
  route: PropTypes.string,
  className: PropTypes.string,
};
export default PromoLink;
