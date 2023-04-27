import PropTypes from "prop-types";
import "../../index.css";
import classnames from "classnames";
import Icon from "../Icon";

const Button = ({
  id,
  label,
  type,
  size,
  isExpand,
  disabled,
  icon,
  onClick,
}) => {
  const buttonClasses = classnames(
    "cursor-pointer relative rounded min-w-40 max-w-full font-bold flex items-center justify-center",
    {
      ["bg-primary-500 text-neutral-100 hover:bg-primary-400 active:bg-primary-600 focus:border-2 border-primary-700"]:
        type === "primary" && !disabled,
      ["cursor-not-allowed bg-neutral-200 text-neutral-100"]:
        type === "primary" && disabled,
      ["bg-neutral-200 text-netral-800 hover:bg-netral-100 active:bg-neutral-300 focus:border-2 border-neutral-300"]:
        type === "secondary",
      ["cursor-not-allowed bg-neutral-100 text-neutral-500"]:
        type === "secondary" && disabled,
      ["bg-transparent text-primary-500 border border-primary-500 hover:bg-neutral-100 active:bg-neutral-100 focus:bg-neutral-500 focus:border-2"]:
        type === "outlined",
      ["cursor-not-allowed bg-neutral-200 text-neutral-200 border border-neutral-300"]:
        type === "outlined" && disabled,
      ["bg-transparent text-neutral-100 border-2 border-neutral-100 hover:bg-neutral-100 active:bg-neutral-100 focus:bg-neutral-500 focus:border-2 hover:text-neutral-900 "]:
        type === "negative",
      ["py-4 px-8 text-base"]: size === "small",
      ["px-4 py-3"]: size === "xsm",
      ["py-5 px-9 text-lg"]: size === "medium",
      ["py-6 px-12 text-lg"]: size === "large",
      ["min-w-full flex justify-center"]: isExpand,
    }
  );
  return (
    <button id={id} className={buttonClasses} type="button" onClick={onclick}>
      {icon ? (
        <span>
          <Icon iconName={icon} /> {" " + label}
        </span>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};
Button.propTypes = {
  disabled: PropTypes.bool,
  isExpand: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  isExpand: false,
};

export default Button;
