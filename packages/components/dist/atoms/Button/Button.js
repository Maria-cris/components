"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
require("../../index.css");
var _classnames2 = _interopRequireDefault(require("classnames"));
var _Icon = _interopRequireDefault(require("../Icon"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Button = function Button(_ref) {
  var _classnames;
  var id = _ref.id,
    label = _ref.label,
    type = _ref.type,
    size = _ref.size,
    isExpand = _ref.isExpand,
    disabled = _ref.disabled,
    icon = _ref.icon,
    onClick = _ref.onClick;
  var buttonClasses = (0, _classnames2.default)("cursor-pointer relative rounded min-w-40 max-w-full font-bold flex items-center justify-center", (_classnames = {}, _defineProperty(_classnames, "bg-primary-500 text-neutral-100 hover:bg-primary-400 active:bg-primary-600 focus:border-2 border-primary-700", type === "primary" && !disabled), _defineProperty(_classnames, "cursor-not-allowed bg-neutral-200 text-neutral-100", type === "primary" && disabled), _defineProperty(_classnames, "bg-neutral-200 text-netral-800 hover:bg-netral-100 active:bg-neutral-300 focus:border-2 border-neutral-300", type === "secondary"), _defineProperty(_classnames, "cursor-not-allowed bg-neutral-100 text-neutral-500", type === "secondary" && disabled), _defineProperty(_classnames, "bg-transparent text-primary-500 border border-primary-500 hover:bg-neutral-100 active:bg-neutral-100 focus:bg-neutral-500 focus:border-2", type === "outlined"), _defineProperty(_classnames, "cursor-not-allowed bg-neutral-200 text-neutral-200 border border-neutral-300", type === "outlined" && disabled), _defineProperty(_classnames, "bg-transparent text-neutral-100 border-2 border-neutral-100 hover:bg-neutral-100 active:bg-neutral-100 focus:bg-neutral-500 focus:border-2 hover:text-neutral-900 ", type === "negative"), _defineProperty(_classnames, "py-4 px-8 text-base", size === "small"), _defineProperty(_classnames, "px-4 py-3", size === "xsm"), _defineProperty(_classnames, "py-5 px-9 text-lg", size === "medium"), _defineProperty(_classnames, "py-6 px-12 text-lg", size === "large"), _defineProperty(_classnames, "min-w-full flex justify-center", isExpand), _classnames));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    id: id,
    className: buttonClasses,
    type: "button",
    onClick: onclick,
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
  disabled: _propTypes.default.bool,
  isExpand: _propTypes.default.bool,
  label: _propTypes.default.string,
  onClick: _propTypes.default.func,
  type: _propTypes.default.string,
  size: _propTypes.default.string,
  icon: _propTypes.default.string
};
Button.defaultProps = {
  disabled: false,
  isExpand: false
};
var _default = Button;
exports.default = _default;