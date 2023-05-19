"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _calculateAspectPer = require("../../helpers/calculateAspectPer");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultRatioPercentage = "50%"; // 2:1
var fractionRegex = /([1-9][0-9]*(.[0-9]*)?)\/[1-9][0-9]*(.[0-9]*)?/g;
var defaultValues = {
  ratio: "1/2"
};
var Aspect = function Aspect(_ref) {
  var _ref$ratio = _ref.ratio,
    ratio = _ref$ratio === void 0 ? defaultValues.ratio : _ref$ratio,
    children = _ref.children;
  var aspectRatioPercentage = (0, _calculateAspectPer.calculateAspectRatioPercentage)(ratio, fractionRegex, defaultRatioPercentage);
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
Aspect.defaultProps = defaultValues;
var _default = Aspect;
exports.default = _default;