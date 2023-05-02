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
  xsm: cn("px-4 py-3"),
  sm: cn("py-4 px-8"),
  md: cn("py-5 px-9 text-lg"),
  lg: cn("py-6 px-12 text-lg"),
};
// const sizeIcon = {
//   sm: cn("p-1.5 w-8 h-8"),
//   md: cn("p-3.5 w-12 h-12"),
//   lg: cn("p-4 w-15 h-15"),
// };

const variants = {
  primary: cn(
    "bg-primary-500 hover:bg-primary-400 active:bg-primary-600",
    "text-neutral-100",
    "focus:border-2 border-primary-700"
  ),
  secondary: cn(
    "bg-neutral-200 hover:bg-neutral-100 active:bg-neutral-300",
    "text-netral-800",
    "focus:border-2 border-neutral-300"
  ),
  outlined: cn(
    "bg-transparent hover:bg-neutral-100 active:bg-neutral-100 focus:bg-neutral-500",
    "text-primary-500",
    "border border-primary-500 focus:border-2"
  ),
  negative: cn(
    "bg-transparent hover:bg-neutral-100 active:bg-neutral-100 focus:bg-neutral-500",
    "text-neutral-100 hover:text-neutral-900",
    "border-2 border-neutral-100 focus:border-2 "
  ),
};
const commonClasses = cn(
  "cursor-pointer",
  "flex",
  "relative",
  "rounded",
  "min-w-40 max-w-full",
  "font-bold",
  "items-center justify-center"
);
const isDisabled = cn(
  "cursor-not-allowed",
  "bg-neutral-200",
  "text-neutral-100",
  commonClasses
);

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
    [isDisabled]: disabled,
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
  type: PropTypes.oneOf(["primary", "secondary", "outlined", "negative"]),
  size: PropTypes.oneOf(["xsm", "sm", "md", "lg"]),
  icon: PropTypes.string,
};

Button.defaultProps = defaultValues;

export default Button;
