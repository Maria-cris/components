import PropTypes from "prop-types";
import cn from "classnames";

const defaultValues = {
  className: "",
  type: "solid",
};
const Icon = ({
  iconName,
  className = defaultValues.className,
  type = defaultValues.type,
}) => {
  return (
    <span
      className={cn("select-none", className, {
        ["material-icons-outlined"]: type === "outlined",
        ["font-icons"]: type === "solid",
      })}
    >
      {iconName}
    </span>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["solid", "outlined"]),
};
Icon.defaultProps = defaultValues;
export default Icon;
