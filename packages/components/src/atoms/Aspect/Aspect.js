import PropTypes from "prop-types";
import { calculateAspectRatioPercentage } from "../../helpers/calculateAspectPer";

const defaultRatioPercentage = "50%"; // 2:1
const fractionRegex = /([1-9][0-9]*(.[0-9]*)?)\/[1-9][0-9]*(.[0-9]*)?/g;
const defaultValues = {
  ratio: "1/2",
};
const Aspect = ({ ratio = defaultValues.ratio, children }) => {
  const aspectRatioPercentage = calculateAspectRatioPercentage(
    ratio,
    fractionRegex,
    defaultRatioPercentage
  );

  const paddingStyles = {
    paddingTop: aspectRatioPercentage,
  };
  return (
    <div style={paddingStyles} className="relative w-full h-0">
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
};
Aspect.propTypes = {
  ratio: PropTypes.string,
};

Aspect.defaultProps = defaultValues;

export default Aspect;
