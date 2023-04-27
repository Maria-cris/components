"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames2 = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("../../index.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Heading = function Heading(_ref) {
  var _classnames;
  var title = _ref.title,
    type = _ref.type,
    variant = _ref.variant,
    font = _ref.font;
  var headingClasses = (0, _classnames2.default)("", (_classnames = {}, _defineProperty(_classnames, "font-principal", font === "principal"), _defineProperty(_classnames, "font-secondary", font === "secondary"), _defineProperty(_classnames, "text-4xl md:text-6xl lg:text-7xl font-extrabold", type === "h-1"), _defineProperty(_classnames, "text-2xl md:text-4xl lg:text-6xl font-extrabold", type === "h-2"), _defineProperty(_classnames, "text-2xl lg:text-5xl md:text-3xl font-extrabold", type === "h-3"), _defineProperty(_classnames, "text-xxl md:text-3xl font-bold", type === "h-4"), _defineProperty(_classnames, "text-base lg:text-xl font-bold", type === "h-5"), _defineProperty(_classnames, "text-sm lg:text-md font-bold", type === "h-6"), _defineProperty(_classnames, "text-neutral-100", variant === "negative"), _defineProperty(_classnames, "text-primary-500", variant === "primary"), _classnames));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: headingClasses,
    children: title
  });
};
Heading.propTypes = {
  title: _propTypes.default.string,
  type: _propTypes.default.string,
  font: _propTypes.default.string,
  variant: _propTypes.default.string
};
Heading.defaultProps = {
  variant: "normal",
  font: "principal"
};
var _default = Heading;
exports.default = _default;