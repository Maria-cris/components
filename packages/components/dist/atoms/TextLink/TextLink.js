"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defaultValues = {
  target: "_self",
  className: "",
  onClick: function onClick() {},
  disabled: false
};
var TextLink = function TextLink(_ref) {
  var text = _ref.text,
    href = _ref.href,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? defaultValues.className : _ref$className,
    iconName = _ref.iconName,
    _ref$target = _ref.target,
    target = _ref$target === void 0 ? defaultValues.target : _ref$target,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? defaultValues.onClick : _ref$onClick,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? defaultValues.disabled : _ref$disabled;
  //expand icon state

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "items-center whitespace-nowrap flex",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("p-1  cursor-pointer ", className, _defineProperty({}, "hover:underline", !disabled)),
      onClick: onClick,
      children: href && !disabled ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: "font-principal",
        href: href,
        target: target,
        children: text
      }) : disabled ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "font-principal",
        children: text
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "font-principal",
        onClick: onClick,
        children: text
      })
    }), iconName ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
        iconName: iconName
      }), " "]
    }) : ""]
  });
};
TextLink.propTypes = {
  text: _propTypes.default.string,
  href: _propTypes.default.string,
  iconName: _propTypes.default.string,
  className: _propTypes.default.string,
  target: _propTypes.default.oneOf(["_self", "_blank"]),
  onClick: _propTypes.default.func,
  disabled: _propTypes.default.bool
};
TextLink.defaultProps = defaultValues;
var _default = TextLink;
exports.default = _default;