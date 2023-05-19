"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var palettes = {
  primary: ["bg-primary-100", "bg-primary-200", "bg-primary-300", "bg-primary-400", "bg-primary-500", "bg-primary-600", "bg-primary-700"],
  neutral: ["bg-neutral-100", "bg-neutral-200", "bg-neutral-300", "bg-neutral-400", "bg-neutral-500", "bg-neutral-600", "bg-neutral-700", "bg-neutral-800", "bg-neutral-900"],
  outstanding: ["bg-outstanding-100", "bg-outstanding-200", "bg-outstanding-300", "bg-outstanding-400"]
};
var Color = function Color(_ref) {
  var paletteName = _ref.paletteName;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "flex space-x-1",
    children: palettes[paletteName].map(function (palette, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: (0, _classnames.default)("w-10 h-10 flex justify-center ", palette),
        children: 100 * (index + 1)
      }, index);
    })
  });
};
Color.propTypes = {
  paletteName: _propTypes.default.oneOf(["primary", "neutral", "outstanding"])
};
Color.defaultProps = {
  paletteName: "primary"
};
var _default = Color;
exports.default = _default;