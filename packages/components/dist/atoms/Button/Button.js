"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Icon = _interopRequireDefault(require("../Icon"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defaultValues = {
  id: "btn",
  size: "sm",
  disabled: false,
  variant: "primary",
  iconName: "",
  className: ""
};
var sizes = {
  xsm: (0, _classnames.default)("px-4 py-3 text-sm rounded"),
  sm: (0, _classnames.default)("py-4 px-8 text-base rounded-lg"),
  md: (0, _classnames.default)("py-5 px-9 text-xl rounded-lg"),
  lg: (0, _classnames.default)("py-6 px-12 text-xl rounded-lg")
};
// const sizeIconName = {
//   sm: cn("p-1.5 w-8 h-8"),
//   md: cn("p-3.5 w-12 h-12"),
//   lg: cn("p-4 w-15 h-15"),
// };

var variants = {
  primary: (0, _classnames.default)("bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-600 active:bg-neutral-600", "text-neutral-100", "border border-neutral-900 active:border-0 active:ring-0 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"),
  outlined: (0, _classnames.default)("bg-transparent hover:bg-neutral-200 active:bg-neutral-400 focus:bg-neutral-100", "text-neutral-900", " border border-transparent focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"),
  text: (0, _classnames.default)("bg-transparent hover:bg-neutral-200 active:bg-neutral-400 ", "text-neutral-900 hover:text-neutral-900", "active:ring-0 active:border-0 focus:border focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 "),
  "outlined-negative": (0, _classnames.default)("bg-transparent text-neutral-100 border border-neutral-100  ", "hover:bg-neutral-100 hover:border-neutral-900 hover:text-neutral-900", "active:ring-0 active:border-0 active:bg-neutral-400 active:text-neutral-100 ", "focus:border focus:border-neutral-100 focus:ring-1 focus:ring-neutral-100 ")
};
var commonClasses = (0, _classnames.default)("flex", "relative", "min-w-40 max-w-full", "font-bold font-principal", "items-center justify-center");
var isDisabled = {
  primary: (0, _classnames.default)("cursor-not-allowed", "bg-neutral-400", "text-neutral-100"),
  text: (0, _classnames.default)("cursor-not-allowed text-neutral-400"),
  outlined: (0, _classnames.default)("cursor-not-allowed", "bg-transparent", "text-neutral-400", "border border-neutral-400"),
  "outlined-negative": (0, _classnames.default)("cursor-not-allowed", "bg-transparent", "text-neutral-200", "border border-neutral-200")
};
var Button = function Button(_ref) {
  var _cn;
  var _ref$id = _ref.id,
    id = _ref$id === void 0 ? defaultValues.id : _ref$id,
    label = _ref.label,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? defaultValues.variant : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? defaultValues.size : _ref$size,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$iconName = _ref.iconName,
    iconName = _ref$iconName === void 0 ? defaultValues.iconName : _ref$iconName,
    onClick = _ref.onClick,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className;
  var buttonClasses = (0, _classnames.default)(commonClasses, className, (_cn = {}, _defineProperty(_cn, [sizes[size]], true), _defineProperty(_cn, [variants[variant]], !disabled), _defineProperty(_cn, [isDisabled[variant]], disabled), _defineProperty(_cn, "cursor-pointer", !disabled), _cn));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    id: id,
    className: buttonClasses,
    variant: "button",
    onClick: onClick,
    children: iconName ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: (0, _classnames.default)(" flex items-center", _defineProperty({}, "space-x-2", label)),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
        iconName: iconName
      }), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: label
      })]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: label
    })
  });
};
Button.propTypes = {
  id: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string,
  label: _propTypes.default.string,
  onClick: _propTypes.default.func,
  variant: _propTypes.default.oneOf(["primary", "outlined", "text", "outlined-negative"]),
  size: _propTypes.default.oneOf(["xsm", "sm", "md", "lg"]),
  iconName: _propTypes.default.string
};
Button.defaultProps = defaultValues;
var _default = Button;
exports.default = _default;