"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var fonts = {
  principal: (0, _classnames.default)("font-principal"),
  secondary: (0, _classnames.default)("font-secondary")
};
var types = {
  "h-1": (0, _classnames.default)("text-4xl md:text-6xl lg:text-7xl font-extrabold"),
  "h-2": (0, _classnames.default)("text-2xl md:text-4xl lg:text-6xl font-extrabold"),
  "h-3": (0, _classnames.default)("text-2xl lg:text-5xl md:text-3xl md:font-extrabold font-bold"),
  "h-4": (0, _classnames.default)("text-xxl md:text-3xl font-bold"),
  "h-5": (0, _classnames.default)("text-base lg:text-xl font-bold"),
  "h-6": (0, _classnames.default)("text-base lg:text-lg font-semibold")
};
var variants = {
  primary: (0, _classnames.default)("text-neutral-500"),
  negative: (0, _classnames.default)("text-neutral-100")
};
var defaultValues = {
  type: "h-1",
  variant: "normal",
  font: "principal",
  className: ""
};
var Heading = function Heading(_ref) {
  var _cn;
  var title = _ref.title,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? defaultValues.type : _ref$type,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? defaultValues.variant : _ref$variant,
    _ref$font = _ref.font,
    font = _ref$font === void 0 ? defaultValues.font : _ref$font,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className;
  var headingClasses = (0, _classnames.default)(className, (_cn = {}, _defineProperty(_cn, [fonts === null || fonts === void 0 ? void 0 : fonts[font]], font), _defineProperty(_cn, [types === null || types === void 0 ? void 0 : types[type]], type), _defineProperty(_cn, [variants === null || variants === void 0 ? void 0 : variants[variant]], variant), _cn));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: headingClasses,
    children: title
  });
};
Heading.propTypes = {
  title: _propTypes.default.string,
  type: _propTypes.default.oneOf(["h-1", "h-2", "h-3", "h-4", "h-5", "h-6"]),
  font: _propTypes.default.oneOf(["principal", "secondary"]),
  variant: _propTypes.default.oneOf(["normal", "primary", "negative"]),
  className: _propTypes.default.string
};
Heading.defaultProps = defaultValues;
var _default = Heading;
exports.default = _default;