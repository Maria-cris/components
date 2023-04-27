import PropTypes from "prop-types";

const Aspect = ({ ratio, children }) => {
  const defaultRatioPercentage = "50%"; // 2:1
  const fractionRegex = /([1-9][0-9]*(.[0-9]*)?)\/[1-9][0-9]*(.[0-9]*)?/g;
  const calculateAspectRatioPercentage = (ratio) => {
    const containsValidFraction = fractionRegex.test(ratio);

    if (containsValidFraction) {
      const fraction = ratio.match(fractionRegex)
        ? ratio.match(fractionRegex)[0]
        : false;
      const numerator = Number(fraction ? fraction.split("/")[0] : 1);
      const denominator = Number(fraction ? fraction.split("/")[1] : 0);

      const roundedNumerator = Math.floor(numerator);
      const roundedDenominator = Math.floor(denominator);

      return `${(roundedDenominator / roundedNumerator) * 100}%`;
    } else {
      return defaultRatioPercentage;
    }
  };
  const aspectRatioPercentage = calculateAspectRatioPercentage(ratio);
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

Aspect.defaultProps = {
  ratio: "2/1",
};

export default Aspect;
