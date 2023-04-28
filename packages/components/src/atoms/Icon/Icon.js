import PropTypes from "prop-types";

const Icon = ({ iconName }) => {
  return <span className="font-icons">{iconName}</span>;
};

Icon.propTypes = {
  iconName: PropTypes.string,
};
Icon.defaultProps = {
  iconName: "home",
};
export default Icon;
