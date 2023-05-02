import cn from "classnames";
import PropTypes from "prop-types";

const fonts = {
  principal: cn("font-principal"),
  secondary: cn("font-secondary"),
};
const types = {
  "h-1": cn("text-4xl md:text-6xl lg:text-7xl font-extrabold"),
  "h-2": cn("text-2xl md:text-4xl lg:text-6xl font-extrabold"),
  "h-3": cn("text-2xl lg:text-5xl md:text-3xl font-extrabold"),
  "h-4": cn("text-xxl md:text-3xl font-bold"),
  "h-5": cn("text-base lg:text-xl font-bold"),
  "h-6": cn("text-sm lg:text-md font-bold"),
};
const variants = {
  primary: cn("text-neutral-500"),
  negative: cn("text-neutral-100"),
};
const defaultValues = {
  type: "h-1",
  variant: "normal",
  font: "principal",
};

const Heading = ({
  title,
  type = defaultValues.type,
  variant = defaultValues.variant,
  font = defaultValues.font,
}) => {
  const headingClasses = cn("", {
    [[fonts?.[font]]]: font,
    [[types?.[type]]]: type,
    [[variants?.[variant]]]: variant,
  });
  return <span className={headingClasses}>{title}</span>;
};

Heading.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(["h-1", "h-2", "h-3", "h-4", "h-5", "h-6"]),
  font: PropTypes.oneOf(["principal", "secondary"]),
  variant: PropTypes.oneOf(["normal", "primary", "negative"]),
};

Heading.defaultProps = defaultValues;

export default Heading;
