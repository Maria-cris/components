import classnames from "classnames";
import PropTypes from "prop-types";
import "../../index.css";
const Heading = ({ title, type, variant, font }) => {
  const headingClasses = classnames("", {
    ["font-principal"]: font === "principal",
    ["font-secondary"]: font === "secondary",
    ["text-4xl md:text-6xl lg:text-7xl font-extrabold"]: type === "h-1",
    ["text-2xl md:text-4xl lg:text-6xl font-extrabold"]: type === "h-2",
    ["text-2xl lg:text-5xl md:text-3xl font-extrabold"]: type === "h-3",
    ["text-xxl md:text-3xl font-bold"]: type === "h-4",
    ["text-base lg:text-xl font-bold"]: type === "h-5",
    ["text-sm lg:text-md font-bold"]: type === "h-6",
    ["text-neutral-100"]: variant === "negative",
    ["text-primary-500"]: variant === "primary",
  });
  return <span className={headingClasses}>{title}</span>;
};
Heading.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  font: PropTypes.string,
  variant: PropTypes.string,
};

Heading.defaultProps = {
  variant: "normal",
  font: "principal",
};

export default Heading;
