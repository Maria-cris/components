import PropTypes from "prop-types";
import cn from "classnames";

const defaultValues = {
  className: "",
};
const Icon = ({ iconName, className = defaultValues.className }) => {
  return <span className={cn("font-icons", className)}>{iconName}</span>;
};

Icon.propTypes = {
  iconName: PropTypes.string,
  className: PropTypes.string,
};
Icon.defaultProps = {
  className: "",
};
export default Icon;
