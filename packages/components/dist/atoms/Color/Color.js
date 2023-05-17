"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var palettes = {
  primary: ["bg-primary-100", "bg-primary-200", "bg-primary-300", "bg-primary-400", "bg-primary-500", "bg-primary-600", "bg-primary-700"],
  neutral: ["bg-neutral-100", "bg-neutral-200", "bg-neutral-300", "bg-neutral-400", "bg-neutral-500", "bg-neutral-600", "bg-neutral-700", "bg-neutral-800", "bg-neutral-900"],
  outstanding: ["bg-oustanding-100", "bg-oustanding-200", "bg-oustanding-300", "bg-oustanding-400"]
};
var Color = function Color(_ref) {
  var palletteName = _ref.palletteName;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "flex space-x-1",
    children: palettes[palletteName].map(function (palette, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: (0, _classnames.default)("w-5 h-5 ", palette)
      }, index);
    })
  });
};
var _default = Color;
exports.default = _default;