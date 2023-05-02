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
  isExpand: false,
  type: "primary",
  icon: ""
};
var sizes = {
  xsm: (0, _classnames.default)("px-4 py-3"),
  sm: (0, _classnames.default)("py-4 px-8"),
  md: (0, _classnames.default)("py-5 px-9 text-lg"),
  lg: (0, _classnames.default)("py-6 px-12 text-lg")
};
// const sizeIcon = {
//   sm: cn("p-1.5 w-8 h-8"),
//   md: cn("p-3.5 w-12 h-12"),
//   lg: cn("p-4 w-15 h-15"),
// };

var variants = {
  primary: (0, _classnames.default)("bg-primary-500 hover:bg-primary-400 active:bg-primary-600", "text-neutral-100", "focus:border-2 border-primary-700"),
  secondary: (0, _classnames.default)("bg-neutral-200 hover:bg-neutral-100 active:bg-neutral-300", "text-netral-800", "focus:border-2 border-neutral-300"),
  outlined: (0, _classnames.default)("bg-transparent hover:bg-neutral-100 active:bg-neutral-100 focus:bg-neutral-500", "text-primary-500", "border border-primary-500 focus:border-2"),
  negative: (0, _classnames.default)("bg-transparent hover:bg-neutral-100 active:bg-neutral-100 focus:bg-neutral-500", "text-neutral-100 hover:text-neutral-900", "border-2 border-neutral-100 focus:border-2 ")
};
var commonClasses = (0, _classnames.default)("cursor-pointer", "flex", "relative", "rounded", "min-w-40 max-w-full", "font-bold", "items-center justify-center");
var isDisabled = (0, _classnames.default)("cursor-not-allowed", "bg-neutral-200", "text-neutral-100", commonClasses);
var Button = function Button(_ref) {
  var _cn;
  var _ref$id = _ref.id,
    id = _ref$id === void 0 ? defaultValues.id : _ref$id,
    label = _ref.label,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? defaultValues.type : _ref$type,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? defaultValues.size : _ref$size,
    _ref$isExpand = _ref.isExpand,
    isExpand = _ref$isExpand === void 0 ? false : _ref$isExpand,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? defaultValues.icon : _ref$icon,
    onClick = _ref.onClick;
  var buttonClasses = (0, _classnames.default)(commonClasses, (_cn = {}, _defineProperty(_cn, [sizes[size]], true), _defineProperty(_cn, [variants[type]], !disabled), _defineProperty(_cn, "min-w-full flex justify-center", isExpand), _defineProperty(_cn, isDisabled, disabled), _cn));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    id: id,
    className: buttonClasses,
    type: "button",
    onClick: onClick,
    children: icon ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
        iconName: icon
      }), " ", " " + label]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: label
    })
  });
};
Button.propTypes = {
  id: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  isExpand: _propTypes.default.bool,
  label: _propTypes.default.string,
  onClick: _propTypes.default.func,
  type: _propTypes.default.oneOf(["primary", "secondary", "outlined", "negative"]),
  size: _propTypes.default.oneOf(["xsm", "sm", "md", "lg"]),
  icon: _propTypes.default.string
};
Button.defaultProps = defaultValues;
var _default = Button;
exports.default = _default;