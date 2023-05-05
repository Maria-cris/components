import PropTypes from "prop-types";
import cn from "classnames";
import Icon from "../Icon";

const defaultValues = {
  id: "btn",
  size: "sm",
  disabled: false,
  isExpand: false,
  variant: "primary",
  iconName: "",
  className: "",
};
const sizes = {
  xsm: cn("px-4 py-3 text-sm rounded"),
  sm: cn("py-4 px-8 text-base rounded-lg"),
  md: cn("py-5 px-9 text-xl rounded-lg"),
  lg: cn("py-6 px-12 text-xl rounded-lg"),
};
// const sizeIconName = {
//   sm: cn("p-1.5 w-8 h-8"),
//   md: cn("p-3.5 w-12 h-12"),
//   lg: cn("p-4 w-15 h-15"),
// };

const variants = {
  primary: cn(
    "bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-600 active:bg-neutral-600",
    "text-neutral-100",
    "border border-neutral-900 active:border-0 active:ring-0 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
  ),
  outlined: cn(
    "bg-transparent hover:bg-neutral-200 active:bg-neutral-400 focus:bg-neutral-100",
    "text-neutral-900",
    " border border-transparent focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
  ),
  text: cn(
    "bg-transparent hover:bg-neutral-200 active:bg-neutral-400 ",
    "text-neutral-900 hover:text-neutral-900",
    "active:ring-0 active:border-0 focus:border focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 "
  ),
};
const commonClasses = cn(
  "flex",
  "relative",
  "min-w-40 max-w-full",
  "font-bold font-principal",
  "items-center justify-center"
);
const isDisabled = {
  primary: cn("cursor-not-allowed", "bg-neutral-400", "text-neutral-100"),
  text: cn("cursor-not-allowed text-neutral-400"),
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
  variant = defaultValues.variant,
  size = defaultValues.size,
  disabled = false,
  iconName = defaultValues.iconName,
  onClick,
  className = defaultValues.className,
}) => {
  const buttonClasses = cn(commonClasses, className, {
    [[sizes[size]]]: true,
    [[variants[variant]]]: !disabled,
    [[isDisabled[variant]]]: disabled,
    ["cursor-pointer"]: !disabled,
  });
  return (
    <button
      id={id}
      className={buttonClasses}
      variant="button"
      onClick={onClick}
    >
      {iconName ? (
        <span className={cn(" flex items-center", { ["gap-2"]: label })}>
          <Icon iconName={iconName} /> <span>{label}</span>
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
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "outlined", "text"]),
  size: PropTypes.oneOf(["xsm", "sm", "md", "lg"]),
  iconName: PropTypes.string,
};

Button.defaultProps = defaultValues;

export default Button;
