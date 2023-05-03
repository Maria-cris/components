import PropTypes from "prop-types";
import cn from "classnames";
import Icon from "../Icon";

const defaultValues = {
  id: "btn",
  size: "sm",
  disabled: false,
  isExpand: false,
  type: "primary",
  icon: "",
};
const sizes = {
  xsm: cn("px-4 py-3 text-sm rounded"),
  sm: cn("py-4 px-8 text-base rounded-lg"),
  md: cn("py-5 px-9 text-xl rounded-lg"),
  lg: cn("py-6 px-12 text-xl rounded-lg"),
};
// const sizeIcon = {
//   sm: cn("p-1.5 w-8 h-8"),
//   md: cn("p-3.5 w-12 h-12"),
//   lg: cn("p-4 w-15 h-15"),
// };

const variants = {
  primary: cn(
    "bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-600",
    "text-neutral-100",
    "focus:border-2 border-neutral-900 focus:bg-neutral-600"
  ),
  outlined: cn(
    "bg-transparent hover:bg-neutral-200 active:bg-neutral-600 focus:bg-neutral-100",
    "text-neutral-900",
    "border border-neutral-900 focus:border-2"
  ),
  text: cn(
    "bg-transparent hover:bg-neutral-200 active:bg-neutral-400 ",
    "text-neutral-900 hover:text-neutral-900",
    " border-neutral-900 focus:border-2 "
  ),
};
const commonClasses = cn(
  "cursor-pointer",
  "flex",
  "relative",
  "min-w-40 max-w-full",
  "font-bold font-principal",
  "items-center justify-center"
);
const isDisabled = {
  primary: cn("cursor-not-allowed", "bg-neutral-400", "text-neutral-100"),
  secondary: cn(),
  outlined: cn(
    "cursor-not-allowed",
    "bg-transparent",
    "text-neutral-400",
    "border border-neutral-400"
  ),
};

const Button = ({
  id = defaultValues.id,
  label,
  type = defaultValues.type,
  size = defaultValues.size,
  isExpand = false,
  disabled = false,
  icon = defaultValues.icon,
  onClick,
}) => {
  const buttonClasses = cn(commonClasses, {
    [[sizes[size]]]: true,
    [[variants[type]]]: !disabled,
    ["min-w-full flex justify-center"]: isExpand,
    [[isDisabled[type]]]: disabled,
  });
  return (
    <button id={id} className={buttonClasses} type="button" onClick={onClick}>
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
  id: PropTypes.string,
  disabled: PropTypes.bool,
  isExpand: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "outlined", "text"]),
  size: PropTypes.oneOf(["xsm", "sm", "md", "lg"]),
  icon: PropTypes.string,
};

Button.defaultProps = defaultValues;

export default Button;
