"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Aspect = function Aspect(_ref) {
  var ratio = _ref.ratio,
    children = _ref.children;
  var defaultRatioPercentage = "50%"; // 2:1
  var fractionRegex = /([1-9][0-9]*(.[0-9]*)?)\/[1-9][0-9]*(.[0-9]*)?/g;
  var calculateAspectRatioPercentage = function calculateAspectRatioPercentage(ratio) {
    var containsValidFraction = fractionRegex.test(ratio);
    if (containsValidFraction) {
      var fraction = ratio.match(fractionRegex) ? ratio.match(fractionRegex)[0] : false;
      var numerator = Number(fraction ? fraction.split("/")[0] : 1);
      var denominator = Number(fraction ? fraction.split("/")[1] : 0);
      var roundedNumerator = Math.floor(numerator);
      var roundedDenominator = Math.floor(denominator);
      return "".concat(roundedDenominator / roundedNumerator * 100, "%");
    } else {
      return defaultRatioPercentage;
    }
  };
  var aspectRatioPercentage = calculateAspectRatioPercentage(ratio);
  var paddingStyles = {
    paddingTop: aspectRatioPercentage
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: paddingStyles,
    className: "relative w-full h-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "w-full h-full absolute top-0 left-0 overflow-hidden",
      children: children
    })
  });
};
Aspect.propTypes = {
  ratio: _propTypes.default.string
};
Aspect.defaultProps = {
  ratio: "2/1"
};
var _default = Aspect;
exports.default = _default;